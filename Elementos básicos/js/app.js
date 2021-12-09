//export function tabs(){
    const tabsForm  = document.querySelectorAll('.tabs-form');
    const tabsElements  = document.querySelectorAll('#tabs-elements');
    // CLICK en li
        // TODOS .li quitar la clase activo
        // TODOS .tabsElements quitar la clase activo
        // .li con la posicion se añadimos la clase activo
        // .tabsElements con la posicion se añadimos la clase activo
    
    // Recorriendo todos los LI
    tabsForm.forEach( ( tab ) => {
        // Asignando un CLICK a CADALI
        tab.addEventListener('click',()=> {
            // Recorrer TODOS los .li
    
            let tabsActive = document.querySelectorAll('.tabs-active');
    
            tabsActive.forEach( ( tabActive ) => {
                // Quitando la clase activo de cada li
                tabActive.classList.remove('tabs-active');
            });
            // En el li que hemos click le añadimos la clase active
            tab.classList.add('tabs-active');
    
            // En el tabsElements con la misma posición le añadimos la clase active
            tabsElements.forEach((tabsElement) => {
                if(tabsElement.dataset.tab == tab.dataset.tab ){
                    tabsElement.classList.add('tabs-active');
                }
            });
            
        });
    });
//}
//función del botón que cuando le das click envia la información(o muestra la información)
//export function buttonSend{
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
//}  

//export function send(){
 //const form = ();

//}

//export function client(){
    const client = new ClientJS(); // Create A New Client Object

	if( client.isMobile() ) { // Check For Mobile Device

		if( client.isMobileAndroid() ) { // Check For Android
			console.log('We Got Us Some Android!');

		}else if( client.isMobileIOS() ){ // Check For iOS
			console.log('We Got Us Some Apple iOS!');

		}else{
			console.log('Unknown Mobile Device...');
		}
	}else{
		if( client.isJava() ) { // Check If Java Is Installed
  			console.log('Java ' + client.getJavaVersion() ); // Get Java Version

		}else{
			console.log('No Java Installed...');
		}
	}
    
    let fingerprint = client.getFingerprint(); // Calculate Device/Browser Fingerprint

	console.log( fingerprint );
    
    let softwareVersion = client.getSoftwareVersion(); // Get ClientJS Software Version
	console.log( softwareVersion );

//}