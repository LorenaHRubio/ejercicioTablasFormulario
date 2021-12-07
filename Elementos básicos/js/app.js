function tabs(){
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
}
