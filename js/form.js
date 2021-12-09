import {clientInfo} from './clientInfo.js'

export const form = () => {

   const submitButton = document.getElementById('sbmt');

   submitButton.addEventListener('click', (event) => {

      event.preventDefault();

      let reservationData = document.getElementById("reservation__data");
      let formData = new FormData (reservationData); 

      if( ckeditors != 'null'){
    
         Object.entries(ckeditors).forEach(([key, value]) => {
            formData.append(key, value.getData());
         });
      }
      
      formData.append('fingerprint', getFingerprint());

      for (let pair of formData.entries()) {
         console.log(pair[0]+ ', ' + pair[1]); 
      }
   });
}