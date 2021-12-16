
export function renderTable(){
    
    let tables = document.querySelectorAll(".crud__table");

    if(tables){

        tables.forEach(table => {

            let url = table.dataset.url;
            
            let sendGetRequest = async () => {
        
                let request = await fetch(url, {
                    method: 'GET', 
                    headers:{
                        "Authorization" : "Bearer " + localStorage.getItem("token"),
                    }
                })
                .then(response => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then(json => {
                    console.log(json.data);
                    let data = json.data;
                    let tableElement = document.createElement("table");
                    let headers = document.createElement("tr");
                    tableElement.appendChild(headers);
                    
                    
                    Object.keys(data[0]).forEach( (key) => {
                        let headerElement = document.createElement('th');
                        headerElement.textContent = key;
                        headers.appendChild(headerElement);
                    });
                    data.forEach( row => {

                        let values = document.createElement('tr');
                        tableElement.appendChild(values);

                        Object.values(row).forEach( (value) =>{
                            let field = document.createElement('td');
                            field.textContent = value;
                            values.appendChild(field);        
                        });
                    })
    
                    table.appendChild(tableElement);


                })
                .catch(error => {
                
                    console.log(error);
                });                    
            };
            sendGetRequest();
        });        
    };
}