export let codepentsSelects = () => {
    function countryList(){
        let arrayCountry = ["Alemania", "Argentina", "Argelia", "Austria", "Bulgaria", "China", "España", "Egipto", "Japón"];
        addOptions("country" , arrayCountry)
    }
    function addOptions(domElement, arracyCountry) {
        let selector = document.getElementsByName(domElement)[0];
        for (country in arracyCountry) {
            var opcion = document.createElement("option");
            opcion.text = arracyCountry[country];
            // Añadimos un value a los option para hacer mas facil escoger los pueblos
            opcion.value = arracyCountry[country].toLowerCase()
            selector.add(opcion);
        }
    }
    function cityList(){
        let cityList = {alemania:["Múnich", "Berlín", "Hamburgo", "Colonia", "Bremen", "Stuttgart", "Heidelberg", "Leipzig", "Dresde"], 
        argentina:["Bueno Aires", "Rosario", "Salta", "Córdoba", "Mar de Plata", "La Plata", "Mendoza", "Santa Fe"], 
        argelia:["Argel", "Tremecén", "Burgía", "Chlef", "Blida", "Skikda", "Gardaya", "Annaba", "COnstantina", "Orán"],
        austria:["Viena", "Salzburgo", "Innsbruck", "Graz", "Linz", "Bregenz", "Villach", "Eisenstadt", "Krems an der Donau", "Wiener Neustadt"],
        bulgaria:["Sofía", "Varna", "Plovdiv", "Burgas", "Stara Zagora", "Ruse", "Shumen", "Nesebar", "Silven", "Gabrovo"],
        china:["Pekín", "Shangái", "Cantón", "Chengdú", "Hong Kong", "Suzhou", "Xi'an", "Tiajín", "Wuhan"],
        espanya:["Madrid", "Cádiz", "Jaén", "Palma", "Cáceres", "Granada", "Toledo", "Barcelona", "Burgos", "Salamanca"],
        egipto:["Lúxor", "Hurgada", "Tebas", "Edfu", "Menfis", "Guiza", "Asuán", "Alejandría", "El Cairo"],
        japon:["Tokio", "Sapporo", "Nagoya", "Nara", "Kyoto", "Osaka", "Yokohama", "Kobe"]};
    
        var country = document.getElementById('provincia')
        var village = document.getElementById('village')
        var countrySelect = country.value
        
        // Se limpian los village
        village.innerHTML = '<option value="">Seleccione un Pueblo...</option>'
        
        if(countrySelect !== ''){
          // Se seleccionan los village y se ordenan
          countrySelect = listVillage[countrySelect]
          countrySelect.sort()
        
          // Insertamos los village
          countrySelect.forEach(function(village){
            let opcion = document.createElement('option')
            opcion.value = village
            opcion.text = village
            village.add(opcion)
          });
        }
        
      }
      
}
