import {clientInfo} from './clientInfo.js';
import { tableForm } from './tableForm.js';

export let renderForm = () => {

    let forms = document.querySelectorAll(".crud__admin-form");
    let formButton = document.getElementById("crud__form-button");
    let closeErrors = document.getElementById('close-errors');

    if(formButton){

        formButton.addEventListener("click", (event) => {

            event.preventDefault();
    
            forms.forEach(form => {

                let url = form.action;
                let data = new FormData(form);
                data.append("fingerprint", clientInfo());
                
        
                let sendPostRequest = async () => {
            
                    let request = await fetch(url, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },
                        method: 'POST', 
                        body: data
                    })
                    .then(response => {
                        if (!response.ok) throw response;

                        return response.json();
                    })
                    .then(json => {
                        console.log(json);
                    })
                    .catch(error => {
                        
                        if(error.status == '400'){
        
                            error.json().then(jsonError => {
        
                                let errors = jsonError.data;
                                let errorsContainer = document.getElementById('errors');
                                errorsContainer.classList.add('active');
                                document.getElementById('error-alerts').innerHTML = "";
        
                                Object.keys(errors).forEach( (key) => {
                                    var errorMessage = document.createElement('li');
                                    errorMessage.textContent = errors[key];
                                    
                                    console.log(errorMessage);
                                    document.getElementById('error-alerts').insertAdjacentElement('beforeend', errorMessage);
                                    document.querySelector(`[name=${key}]`).classList.add('error');
                                    //aquí metemos una variable con las `comillas para al lado` y el símbolo
                                    //del ${variable} y le añadimos el error

                                    
                                });
                                
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
};