var objImgBrique = null;

function Brique(intPosX, intPosY) {
    this.binTroue = false;
    this.intPositionXCreuser = intPosX;
    this.intPositionYCreuser = intPosY;
    this.intTempsEcoule = 0;
    this.objDateHeure_1 = 0;
}

//pas obligatoire pour certains
function initBrique() {
    objImgBrique = new Image();
    objImgBrique.src = './Images/brique.png';

    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "1" && !this.binTroue) {
                tabObjBriques.push(new Brique(j, i))
            }
        }
    }

    console.log([tabObjBriques])
}

Brique.prototype.dessinerBrique = function (objC2D) {
    objC2D.save();
    objC2D.translate(intLargeur, intHauteur);

    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "1" && !this.binTroue) {
                objC2D.drawImage(objImgBrique, j * intLargeur, i * intHauteur, intLargeur, intHauteur);
            }
        }
    }

    objC2D.restore();
}

let msEcoulees = 0
let tabPosition = new Array()
//Remplir brique
function mettreAJourBrique() {

/***                                                Tentative de modif                                              ****/
    var objDateHeure_2 = Date.now();
    var intDate1 = 0;
    for (var i = 0; i < tabObjBriques.length; i++) {
        if (tabObjBriques[i].binTroue) {
            tabObjBriques[i].intTempsEcoule = Math.floor((msEcoulees % 60000) / 1000)
            
            intDate1 = tabObjBriques[i].objDateHeure_1;
            // msEcoulees += objDateHeure_2 - intDate1;
            this.intTempsEcoule = tabObjBriques[i].intTempsEcoule;
            // console.log((this.intTempsEcoule)+ "   " + tabObjBriques[i].intTempsEcoule)
        }
    }
    tempsE = Math.floor((msEcoulees % 60000) / 1000)
   
    msEcoulees += objDateHeure_2 - intDate1;
    //console.log("Temps 2 :  " + objDateHeure_2 + " tempsE : " + tempsE);

/***                                              -------------------------------                                         ****/



    //msEcoulees += objDateHeure_2 - this.objDateHeure_1
   //this.intTempsEcoule = Math.floor((msEcoulees % 60000) / 1000)

    this.intTempsEcoule %= 60

    
    // console.log(typeof(this.objDateHeure_1))
    // console.log(this.intTempsEcoule + " " + this.objDateHeure_1 + " " + objDateHeure_2 + " " + msEcoulees)

    if (this.intTempsEcoule == 59) {
        if (tabPositionsCreuser.length > 0) {

            tabPosition = tabPositionsCreuser.toString().split(' ')
            this.intPositionXCreuser = Number(tabPosition[0])
            this.intPositionYCreuser = Number(tabPosition[1])

            tabChar[this.intPositionYCreuser][this.intPositionXCreuser] = '1'
            objSons.remplitTrou.play()


            for (let i = 0; i < tabPosition.length; i++) {
                tabPosition.splice(i, 2)
            }

            for (let i = 0; i < tabPositionsCreuser.length; i++) {
                tabPositionsCreuser.splice(i, 2)
            }
        }
    }
    this.objDateHeure_1 = objDateHeure_2;
}
