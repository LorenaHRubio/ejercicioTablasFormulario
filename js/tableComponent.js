class Table extends HTMLElement {
//extends
//Un objeto puede extender otro objeto. 
//Extender significa que coge las cualidades de un objeto y las amplio.
//aquí extiendo unas cualidades de HTMLElement
//Herencía
//para poder utilizar el componente hay que poner debajo del todo(Ve abajo)

    constructor() {
        //siempre hay un constructor
        //constructor es lo primero que va a arrancar
        //dentro siempre super();
        //significa ejecuta todo lo que haya dentro de HTMLElement o del padre
        super();
    
        this.shadow = this.attachShadow({ mode: 'open' });//activa el shadow mode
        //a partir de aquí, todo lo que se hace en las sombras
        //No estás obligada a utilizar el shadow dom
        this.api = 'http://141.94.27.118:8080/api';
        //estas son las propiedades de la clase table

        //se pueden crear eventos "newData" es un evento inventado
        //podemos crear eventos personalizados
        document.addEventListener("newData",( event =>{

            this.loadData();
        }));

        document.addEventListener("newUrl",( event =>{
            //este evento esta escuchando si hay una nueva url, como cambiar de sitio en la web
            //pero sin recargar la página
            //si hay una nueva url, al componente le cambiaré
            this.setAttribute('url', this.api + event.detail.url);
        }));
    }

    static get observedAttributes() { return ['url']; }

    //se arrancará cuando conectas tu componente al DOM
    //se invoca cada que se añade un elemento personalizado a un documento.
    //esto ocurrirá cada vez que el nodo se mueva
    connectedCallback() {
        this.loadData();
    }

    //Se invoca cada vez que los atributos del elemento se añaden, quitan o cambian.
    //debe especificamente en el método estático observedAttributes los 
    //atributos que queremos que 
    attributeChangedCallback(){
        this.loadData();
    }

    loadData() {
        //cogemos la url que hemos puesto en tl html como atributo del elemento
        let url = this.getAttribute('url');

        if(url){

            fetch(url, { 
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            }) 
            .then(response => {
                if (!response.ok) throw response;

                return response.json();
            })
            .then(json => {
                this.data = json.data;
                this.render();
            })
            .catch(error => console.log(error));
        }
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            table {
                border-collapse: collapse;
                width: 100%;
            }
            td, th {
                border: 1px solid hsl(0, 0%, 87%);
                color: hsl(0, 0%, 100%);
                font-family: 'Ubuntu';
                padding: 8px;
                text-align: left;
            }

            svg {
                cursor: pointer;
                height: 1.5em;
                width: 1.5em;
            }

            svg path {
                fill: hsl(0, 0%, 100%);
            }

            svg:hover path {
                fill: hsl(19, 100%, 50%);
            }
        </style>
        <table>
            <thead>
                ${this.getTableHeader()}
            </thead>
            <tbody>
                ${this.getTableData()}
            </tbody>
        </table>`;      
        
        let editButtons = this.shadow.querySelectorAll(".edit-button");

        editButtons.forEach(editButton => {

            editButton.addEventListener("click", (event) => {

                document.dispatchEvent(new CustomEvent('showElement', {
                    detail: {
                        //
                        url: this.getAttribute('url') + '/' + editButton.dataset.id,
                    }
                }));
            });

        });
    }

    getTableHeader() {

        let header = '';

        Object.keys(this.data[0]).forEach( (key) => {
            header += `<th>${key}</th>`;
        });

        header += `<th></th>`;

        return `<tr>${header}</tr>`;
    }

    getTableData() {

        let data = '';

        this.data.forEach(element => {

            data += `<tr>`;

            Object.values(element).forEach( (value) => {
                data += `<td>${value}</td>`;
            });

            data += 
            `<td class="edit-button" data-id="${element.id}">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
            </td>`;
            
            data += `</tr>`;
        });

        return data;
    }           
}
//donde pone Table es el nombre de la clase del componente
//en HTML lo único que necesita es una etiqueta <table-component></table-component>
customElements.define('table-component', Table);