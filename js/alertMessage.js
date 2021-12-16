export function alertMessage(){
    
    document.addEventListener('alertMessage',( event =>{
        let alertOkMessage = document.getElementById("alert-ok-message").classList.add("active");
        function closeAlert(){
            document.getElementById("alert-ok-message").classList.remove("active");
        }
        setTimeout(closeAlert, 5000);
    }));
}
