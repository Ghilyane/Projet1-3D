var strMiliSecondes = "000";
var strTemps = "";
var intMiliSecondes = 0;
var intSecondes = 0;
var intMinutes = 0;
var booStart = false;
var objDateHeure1 = Date.now();
var intMsEcoulees = 0;

function mettreAjourChrono() {
    var objDateHeure2 = Date.now();
    // console.log("objdate1 : " + objDateHeure1 + "objDate2 : " + objDateHeure2)
    if (booStart) {
        intMsEcoulees += objDateHeure2 - objDateHeure1;
    }

    intMinutes = Math.floor((intMsEcoulees % 3600000)/ 60000);
    intSecondes = Math.floor((intMsEcoulees % 60000) / 1000);
    intMiliSecondes = intMsEcoulees % 1000;

    strTemps = (intMinutes < 10 ? '0' : '') + intMinutes + ":" + (intSecondes < 10 ? '0' : '') + intSecondes ;
    console.log(strTemps);
    
    objDateHeure1 = objDateHeure2;
}

function demarrer(e) {
    if (e.button == 0 && !booStart) { //mise en marche du chronomètre
            booStart = true;
        }
        else if (e.button == 0 && booStart) { //mise en arrêt du chronomètre 
            booStart = false;
        }
}

function dessinerHorloge() {   
}