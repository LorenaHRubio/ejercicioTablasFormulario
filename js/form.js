import {clientInfo} from './clientInfo.js';
//import { alertMessage } from './alertMessage.js';

export let renderForm = () => {

    let forms = document.querySelectorAll(".crud__admin-form");
    let formButton = document.getElementById("crud__form-button");
    let closeErrors = document.getElementById('close-errors');
    let editButton = document.querySelectorAll(".edit-button");

    if(editButton)
    {
        document.addEventListener("showElement",( event =>{
            fetch(event.detail.url, { 
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            })
            .then(response => {
                if (!response.ok) throw response;
                
                return response.json();
            })
            .then(json => {
    
                let data = json.data;
    
                Object.entries(data).forEach(([key, value]) =>{
                    
                });
            })
            .catch(error => {
                console.log(error);   
            });     
        }));

    }
    if(formButton){

        formButton.addEventListener("click", (event) => {

            event.preventDefault();
            console.log("Hola");
            forms.forEach(form => {

                let url = form.action;
                let data = new FormData(form);
                data.append("fingerprint", clientInfo());

                let method = "";
                console.log(url + "soy url");
                
                if(data.get('id')){
                    method = 'PUT';
                    url = form.action + '/' + data.get('id');
                    console.log("entro en el put");
                }else{
                    console.log("entro en el post");
                    method = 'POST';
                    url = form.action;
                }
        
                let sendPostRequest = async () => {
            
                    let request = await fetch(url, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },
                        method: 'POST', 
                        body: data
                    })
                    //aqu?? se meter??a el evento que se disparar??a
                    //mientras se espera a que se cargue todo
                    .then(response => {
                        if (!response.ok) throw response;
                        
                        return response.json();
                    })
                    .then(json => {

                        console.log(json);
                        if(json.message){
                            document.dispatchEvent(new CustomEvent('alertMessage', {
                                detail: {
                                    type: 'success',
                                    message: json.message
                                }
                            }));
                        }
                    })
                    .catch(error => {
                        
                        if(error.status == '400'){

                            document.dispatchEvent(new CustomEvent('alertMessage', {
                                detail: {
                                    type: 'error',
                                    message: error.message
                                }
                            }));
        
                            error.json().then(jsonError => {
                                
        
                                // let errors = jsonError.data;
                                // let errorsContainer = document.getElementById('errors');
                                // errorsContainer.classList.add('active');
                                // document.getElementById('error-alerts').innerHTML = "";
        
                                // Object.keys(errors).forEach( (key) => {
                                //     let errorMessage = document.createElement('li');
                                //     errorMessage.textContent = errors[key];
                                    
                                //     console.log(errorMessage);
                                //     document.getElementById('error-alerts').insertAdjacentElement('beforeend', errorMessage);
                                //     document.querySelector(`[name=${key}]`).classList.add('error');
                                //     //aqu?? metemos una variable con las `comillas para al lado` y el s??mbolo
                                //     //del ${variable} y le a??adimos el error
                                // });
                                
                            });   
                        }
        
                        if(error.status == '500'){
                            console.log(error);
                        }
                    });
        
                    // En caso de usar Axios es una libreria
                    
                    // let request = await axios.post(url, json)
                    // .then(response => {
                    //     console.log(response);
                    // })
                    // .catch(error => {
                        
                    //     if(error.response.status == '400'){
        
                    //         let errors = error.response.data.data;      
                    //         let errorMessage = '';
        
                    //         Object.keys(errors).forEach( (key) => {
                    //             let errorMessage = document.createElement('li');
                    //             errorMessage.textContent = errors[key];
                    //             console.log(errorMessage)
                    //         })
        
                    //         console.log(errorMessage);
                    //     }
        
                    //     if(error.response.status == '500'){
                    //         console.log(error);
                    //     }
                    // });
                };
                
                sendPostRequest();
            });          
        });
    }

    if(closeErrors){

        closeErrors.addEventListener('click', (event) => {
            
            event.preventDefault();
            let errorsContainer = document.getElementById('errors');
            errorsContainer.classList.remove('active');

            let errors = document.querySelectorAll('.error');

            errors.forEach( error => {
                error.classList.remove('error');
            });
        });
    }    
}