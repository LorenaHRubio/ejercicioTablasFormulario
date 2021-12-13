import {clientInfo} from './clientInfo.js'

export let renderForm = () => {

    const button = document.querySelector(".crud__store-button");
    
    if(button){
        button.addEventListener('click', (event) => {

            event.preventDefault();
            let formElement = document.getElementById("crud__user-form");
            formData = new FormData(formElement);
    
            if( ckeditors != 'null'){
        
                Object.entries(ckeditors).forEach(([key, value]) => {
                   formData.append(key, value.getData());
                });
             }
             
             formData.append('fingerprint', getFingerprint());
            //ver las cosas en la consola que cogen del formulario con js
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
        });
    }
}  