getData();
/* ei jäädä odottamaan, tehdään muuta, esim. lisätään vaikka elementtejä sivulle */

/* async sisältää toimintaa jota ei jäädä odottamaan */
async function getData(){
   const RESPONSE = await fetch("https://random-data-api.com/api/v2/appliances")
   const OLIO = await RESPONSE.json();

   console.log(OLIO)
}