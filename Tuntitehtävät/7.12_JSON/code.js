getData();
getData1();
/* ei jäädä odottamaan, tehdään muuta, esim. lisätään vaikka elementtejä sivulle */

/* async sisältää toimintaa jota ei jäädä odottamaan */
async function getData(){
   const RESPONSE = await fetch("https://random-data-api.com/api/v2/appliances?size=10")
   const OLIO = await RESPONSE.json();

   for( laite of OLIO){
    let h = document.createElement("h4");
    h.textContent = laite.equipment;
    document.body.appendChild(h);
   }
}


function getData1(){
    fetch("https://random-data-api.com/api/v2/appliances?size=10")
        .then( resp => resp.json())
        .then( laitteet => {
            for( laite of laitteet){
                let h = document.createElement("h4");
                h.textContent = laite.equipment;
                document.body.appendChild(h);
               }
        })

}