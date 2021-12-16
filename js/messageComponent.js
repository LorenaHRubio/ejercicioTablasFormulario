class AlertMessage extends HTMLElement{
    constructor(){
    
        super();
        
        this.shadow = this.attachShadow({mode: 'open'});
        this.message = '';
        this.type = '';

        document.addEventListener("alertMessage", ( event =>{
            this.setAttribute('message', event.detail.message);
            this.setAttribute('type', event.detail.type);
        }));
    };

    static get observedAttributes() { return ['message', 'type']; }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){

        if(name == 'message'){
            this.shadow.querySelector('p').textContent = this.getAttribute('message');
            let alertMessage = this.shadow.querySelector("#alert-message");
            alertMessage.classList.add("active");
    
            function closeAlert(){
                alertMessage.classList.remove("active");
            }
            setTimeout(closeAlert, 5000);
        }

        if(name == 'type'){
            let alertMessage = this.shadow.querySelector("#alert-message");
            alertMessage.classList.add(newValue);
        }
    }
    
    render(){
        this.shadow.innerHTML =
        `
        <style>
            #alert-message{
                background-color: hsl(38, 83%, 77%);
                padding: 1em;
                margin: auto;
                border-radius: .5em;
                opacity: 0;
                position: fixed;
                transition: opacity 0.3s;
                width: max-content;
                bottom: 10vh;
                right: 5%;
                z-index:1500;
            }
            #alert-message.active{
                opacity: 1;
            }

            #alert-message.success{
                background-color: green;
            }
            #alert-message.error{
                background-color: red;
            }
            p{
                color: $red;
                text-align: center;
            }            
        </style>
        <div id="alert-message">
            <p></p>
        </div>`;
    }
}
customElements.define('message-component', AlertMessage);