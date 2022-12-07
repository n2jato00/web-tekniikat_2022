//Luo tähän taulukko käyttäjiä varten.
let users = new Array();
//tai voi tehdä näin
//let users = []

document.getElementById("submit_button").addEventListener('click', submitUser);

let form = document.querySelector("form");

/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan

    let formData = new FormData(form);
    let username = formData.get("uname");
    let password = formData.get("pw");
    

    //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon

/*      let userName = document.getElementById("uname").value;
    let passWord = document.getElementById("pw").value; */

    let user = {
        uname: username,
        pword: password
    }

    users.push(user);
   

    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta.

    for ( u of users ){
        console.log(u.uname)
    }
}