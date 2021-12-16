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
                display: flex;
                align-items: center;
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
                box-shadow: 5px 5px 15px 5px #000000;
            }
            #alert-message svg{
                margin-right: .5em;
            }
            #alert-message.active{
                opacity: 1;
            }

            #alert-message.success{
                background-color: green;
            }
            #alert-message.error{
                background-color: lighten(#d33534, 46%);
                border-color: lighten(#d33534, 38%);
                color: white;
                background-color: hsl(0, 52%, 53%);
            }
            #alert-message.info{
                color: white;
                background-color: hsl(0, 52%, 53%);
            }
            p{
                color: $red;
                text-align: center;
            }            
        </style>
        <div id="alert-message">
            <div>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            </div>
            <div>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z" />
                </svg>        
            </div>
            <div>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                </svg>
            </div>
            <div>    
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            </div>
            <div>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
                </svg>    
            </div>
            <p></p>
        </div>`;
    }
}
customElements.define('message-component', AlertMessage);