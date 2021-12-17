class TableFilter extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        
    }
    static get observedAttributes() { return ['', '']; }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        
        
    }

    render(){
        this.shadow.innerHTML =
        `
        <style>
            .element-search{
                display: flex;
            }
            .input-search input{
                box-sizing: border-box;
                color: black;
                font-family: "Ubuntu";
                font-weight: 600;
                padding: 0.2em 0.5em;
                width: 100%;
                border-radius: .5em;
            }
            .button{
                align-items: center;
                background-color: #d1a046;
                border: .1em solid hsl(0, 0%, 7%);
                border-radius: .5em;
                box-sizing: border-box;
                color: rgb(17, 17, 17);
                cursor: pointer;
                display: flex;
                font-family: Inter,sans-serif;
                font-size: 1em;
                height: 3em;
                justify-content: center;
                line-height: 4em;
                max-width: 100%;
                width: 100%;
                position: relative;
                text-align: center;
                text-decoration: none;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
            }
            .button:after{
                background-color: hsl(0, 0%, 7%);
                border-radius: .5em;
                content: "";
                display: block;
                height: 3em;
                left: 0;
                width: 100%;
                position: absolute;
                top: -2px;
                transform: translate(.5em, .5em);
                transition: transform .2s ease-out;
                z-index: -1;
            }
            .button:hover{
                outline: 0;
            }
            .button:hover:after{
                background-size: 100% auto;
                transform: translate(0, 0);
            }
            .button:focus{
                outline: 0;
            }
        </style>
        <div class="element-search">
            <div class="input-search">
                <input type="text" name="value">
            </div>
            <div class="button-search">
                <button class="button">Buscar</button>
            </div>
        </div>
        `
    }

}
customElements.define('table-filter-component', TableFilter);
// let data=[
//     {
//         "id":1,
//         "name": "Juana",
//         "lastname": "Gonzalez",
//     },
//     {
//         "id":2,
//         "name": "Jose",
//         "lastname": "Perez",
//     },
//     {
//         "id":3,
//         "name": "Pedro",
//         "lastname": "Gonzalez",
//     },
//     {
//         "id":4,
//         "name": "Maria",
//         "lastname": "Suarez",
//     }
// ];
// data.forEach( values => {
//     Object.values(values).forEach( (value) => {
//         if(value == "Gonzalez"){
//             console.log(values);
//         }            
//     });
// });