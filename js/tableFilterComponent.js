class TableFilter extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'open'});        
    }
    //static get observedAttributes() { return ['', '']; }
    //Aquí yo no estoy creando ningún atributo por lo tanto  no necesito
    //que me observen los atributos que es lo que haría esta función

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadow.innerHTML =
        `
        <style>
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 1em;
            }
            input{
                box-sizing: border-box;
                color: black;
                font-family: "Ubuntu";
                font-weight: 600;
                padding: .5em;
                width: 100%;
                border: solid 0.1em #dddddf;
                border-radius: 0.5em;
                box-sizing: border-box;
                margin-bottom: 1em;
            }
            input#search{
                text-align:center;
            }
        </style>
        <form>
            <input type="text" name="search" id="search" placeholder="Busca en la tabla" autocomplete="off">
        </form>
        `;

        this.shadow.querySelector("#search").addEventListener("keyup", event => {
            
            console.log(event.target.value);
            
            document.dispatchEvent(new CustomEvent('tableFilter', {
                detail: {
                    search: event.target.value,
                }
            }));
        });
        
    }

}
customElements.define('table-filter-component', TableFilter);