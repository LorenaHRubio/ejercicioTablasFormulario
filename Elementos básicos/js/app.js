//create a function that will validate a input number is a DNI
const liForm  = document.querySelectorAll('.li-form')
const tabsElements  = document.querySelectorAll('#tabs-elements')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .tabsElements quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .tabsElements con la posicion se añadimos la clase activo

// Recorriendo todos los LI
liForm.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    liForm[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        liForm.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            liForm[i].classList.remove('tabs-active');
            // Quitando la clase active d;e cada tabsElements
            tabsElements[i].classList.remove('tabs-active');
        })

        // En el li que hemos click le añadimos la clase active
        liForm[i].classList.add('tabs-active');
        // En el tabsElements con la misma posición le añadimos la clase active
        tabsElements[i].classList.add('tabs-active');

    })
})