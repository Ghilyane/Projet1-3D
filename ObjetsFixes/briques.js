var objImgBrique = null;

function Brique() {
    this.binTroue = false;
}

//pas obligatoire pour certains
function initBrique() {
    objImgBrique = new Image();
    objImgBrique.src = './Images/brique.png';
}

Brique.prototype.dessinerBrique = function (objC2D) {
    objC2D.save();
    objC2D.translate(intLargeur, intHauteur);

    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "1") {
                objC2D.drawImage(objImgBrique, j * intLargeur, i * intHauteur, intLargeur, intHauteur);
            }
        }
    }

    objC2D.restore();
}

let msEcoulees = 0
let tempsEcoule = 0
let tabPositionX = 0
let tabPositionY = 0
var objDateHeure_1 = Date.now();
//Remplir brique
function mettreAJourBrique() {

    var objDateHeure_2 = Date.now();
    msEcoulees += objDateHeure_2 - objDateHeure_1
    tempsEcoule = Math.floor((msEcoulees % 60000) / 1000)

    tabPositionX = tabPositionsCreuserX[0]
    tabPositionY = tabPositionsCreuserY[0]

    if (tempsEcoule >= 8) {
        tempsEcoule = 0

        tabChar[tabPositionX][tabPositionY] = '1'
        // tabPositionX.shift()
        // tabPositionY.shift()
        //objSons.remplitTrou.play()

        
    }
    objDateHeure_1 = objDateHeure_2;

   // console.log(tabPositionX)

}
