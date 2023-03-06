var strMiliSecondes = "000";
var strTemps = "";
var intMiliSecondes = 0;
var intSecondes = 0;
var intMinutes = 0;
var binStart = false;
var objDateHeure1 = Date.now();
var intMsEcoulees = 0;

function mettreAjourChrono() {
    var objDateHeure2 = Date.now();
    if (binStart) {
        intMsEcoulees += objDateHeure2 - objDateHeure1;
    }

    intMinutes = Math.floor((intMsEcoulees % 3600000)/ 60000);
    intSecondes = Math.floor((intMsEcoulees % 60000) / 1000);
    intMiliSecondes = intMsEcoulees % 1000;

    strTemps = (intMinutes < 10 ? '0' : '') + intMinutes + ":" + (intSecondes < 10 ? '0' : '') + intSecondes ;
    objDateHeure1 = objDateHeure2;
}

function demarrer() {
    if (!binStart) { //mise en marche du chronomètre
            binStart = true;
    }
        // else if (e.button == 0 && booStart) { //mise en arrêt du chronomètre 
        //     booStart = false;
        // }
}