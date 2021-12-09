export function buttonSend(){
    const button = document.querySelector(".crud__store-button");
    
    button.addEventListener('click', (event) => {

        event.preventDefault();
        let formElement = document.getElementById("crud__user-form");
        formData = new FormData(formElement);
        //ver las cosas en la consola que cogen del formulario con js
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        
    });
}  