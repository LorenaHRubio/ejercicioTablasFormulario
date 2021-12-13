export function chooseList (countrySelect, village){
  countrySelect = document.getElementById('country');
  village = document.getElementById('village');
  //let arrayCityList;

  
  //village.innerHTML = "";
  if(countrySelect.value == "alemania"){
    console.log = "primer if";
    let arrayCityList = ["Múnich", "Berlín", "Hamburgo", "Colonia", "Bremen", "Stuttgart", "Heidelberg", "Leipzig", "Dresde"];
  }else if(countrySelect.value == "argentina"){
    console.log = "segundo if";
    let arrayCityList = ["Bueno Aires", "Rosario", "Salta", "Córdoba", "Mar de Plata", "La Plata", "Mendoza", "Santa Fe"];
  }else if(countrySelect.value == "austria"){
    console.log = "tercero if";
    let arrayCityList = ["Viena", "Salzburgo", "Innsbruck", "Graz", "Linz", "Bregenz", "Villach", "Eisenstadt", "Krems an der Donau", "Wiener Neustadt"];
  }else if(countrySelect.value == "bulgaria"){
    console.log = "cuarto if";
    let arrayCityList = ["Sofía", "Varna", "Plovdiv", "Burgas", "Stara Zagora", "Ruse", "Shumen", "Nesebar", "Silven", "Gabrovo"];
  }else if(countrySelect.value == "china"){
    console.log = "quinto if";
    let arrayCityList = ["Pekín", "Shangái", "Cantón", "Chengdú", "Hong Kong", "Suzhou", "Xi'an", "Tiajín", "Wuhan"];
  }else if(countrySelect.value == "españa"){
    console.log = "sexto if";
    let arrayCityList = ["Madrid", "Cádiz", "Jaén", "Palma", "Cáceres", "Granada", "Toledo", "Barcelona", "Burgos", "Salamanca"];
  }else if(countrySelect.value == "egipto"){
    console.log = "penultimo if";
    let arrayCityList = ["Lúxor", "Hurgada", "Tebas", "Edfu", "Menfis", "Guiza", "Asuán", "Alejandría", "El Cairo"];
  }else if(countrySelect.value == "japon"){
    console.log = "ultimo if";
    let arrayCityList = ["Tokio", "Sapporo", "Nagoya", "Nara", "Kyoto", "Osaka", "Yokohama", "Kobe"];
  }

  for (let option in arrayCityList){
    let pair = arrayCityList[option].split('|');
    let newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    village.options.add(newOption);
  }
}