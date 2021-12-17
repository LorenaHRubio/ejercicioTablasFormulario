class Validation extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'open'}); 

        document.addEventListener("validationError", event =>{
            this.setAttribute('message', event.detail.message);
            this.setAttribute('type', event.detail.type);
        });
    }

    static get observedAttributes() { return ['message', 'type']; }

    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(name, oldValue, newValue){
        if(jsonError.data)(
            document.dispatchEvent(new CustomEvent("validationError",{
                detail: {
                    errors: jsonError.data,
                }
            }))
        );
    }

    render(){
        this.shadow.innerHTML =
        `
        <style>
        </style>
        <div>
        </div>
        `;
    }
}
customElements.define('validation-component', Validation);