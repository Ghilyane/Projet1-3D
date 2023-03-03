var objImgBrique = null;

function Brique() {
    this.binTroue = false;
    this.intTempsAccumule = 0;
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
                //test
                // objC2D.fillStyle = 'white'
                // objC2D.fillText(j + " " + i, j * intLargeur, i * intHauteur)
            }
        }
    }

    objC2D.restore();
}

let msEcoulees = 0
let tempsEcoule = 0
var objDateHeure_1 = Date.now();
let intPositionX = 0
let intPositionY = 0
let tabPosition = ''
//Remplir brique
function mettreAJourBrique() {

    var objDateHeure_2 = Date.now();
    msEcoulees += objDateHeure_2 - objDateHeure_1
    tempsEcoule = Math.floor((msEcoulees % 60000) / 1000)


    if (tempsEcoule >= 8) {
        tempsEcoule = 0
        
        if (tabPositionsCreuser.length > 0) {

            /*
            1-capable d'enlever plusieurs trous
            2-capable d'enelever un trous qui a deja ete creuser et remplit
            */
            tabPosition = tabPositionsCreuser.toString().split(' ')
            intPositionX = Number(tabPosition[0])
            intPositionY = Number(tabPosition[1])

            tabChar[intPositionX][intPositionY] = '1'
            objSons.remplitTrou.play()
            objSons.remplitTrou.pause()


            intPositionX = 0
            intPositionY = 0
            

            //tabChar[Number(tabPositionsCreuser[0].toString().at(0) + tabPositionsCreuser[0].toString().at(1))][Number(tabPositionsCreuser[0].toString().at(2) + tabPositionsCreuser[0].toString().at(3))] = '4'
            //tabPositionsCreuser.shift()


            // for (let i = 0; i < tabPositionsCreuser.length; i++){
            //     tabChar[tabPositionsCreuser[0].toString().at(0) + tabPositionsCreuser[0].toString().at(1)][tabPositionsCreuser[0].toString().at(2) + tabPositionsCreuser[0].toString().at(3)] = '1'
            // }

        }
        else if (tabPositionsCreuser.length > 1) {
            console.log('ye')
        }
        
       
       // tabChar[tabPositionsCreuser[0].toString().substring(0,',')][tabPositionsCreuser[0].toString().substring(1,',')] = '2'
    }
    //console.log(tabPositionsCreuser)
    objDateHeure_1 = objDateHeure_2;


}
