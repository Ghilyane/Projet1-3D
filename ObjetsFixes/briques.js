var objImgBrique = null;

function Brique() {
    this.binTroue = false;
    this.intPositionXCreuser = 0;
    this.intPositionYCreuser = 0;
    this.intTempsEcoule = 0;
    this.objDateHeure_1 = 0;
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
let tabPosition = new Array()
//Remplir brique
function mettreAJourBrique() {

    var objDateHeure_2 = Date.now();

    msEcoulees += objDateHeure_2 - this.objDateHeure_1
    this.intTempsEcoule = Math.floor((msEcoulees % 60000) / 1000)

    this.intTempsEcoule %= 9

    console.log(typeof(this.objDateHeure_1))
    console.log(this.intTempsEcoule + " " + this.objDateHeure_1 + " " + objDateHeure_2 + " " + msEcoulees)

    if (this.intTempsEcoule == 8) {
        if (tabPositionsCreuser.length > 0) {

            /*
            1-capable d'enlever plusieurs trous
            2-capable d'enelever un trous qui a deja ete creuser et remplit
            */
            tabPosition = tabPositionsCreuser.toString().split(' ')
            this.intPositionXCreuser = Number(tabPosition[0])
            this.intPositionYCreuser = Number(tabPosition[1])

            tabChar[this.intPositionYCreuser][this.intPositionXCreuser] = '1'
            objSons.remplitTrou.play()
            objSons.remplitTrou.pause()

            console.log(Date())
            console.log(tabPosition)
            console.log(tabPositionsCreuser)
            console.log(Number(tabPosition[0]) + " " + Number(tabPosition[1]))
            console.log(this.intPositionXCreuser + " " + this.intPositionYCreuser)

            console.log(tabPosition.length)
            console.log(tabPositionsCreuser.length)

            for (let i = 0; i < tabPosition.length; i++) {
                tabPosition.splice(i, 2)
            }

            for (let i = 0; i < tabPositionsCreuser.length; i++) {
                tabPositionsCreuser.splice(i, 2)
            }


            // intPositionX = 0
            // intPositionY = 0

            console.log('-----------------------------------------------------------')
            console.log(tabPosition)
            console.log(tabPositionsCreuser)
            console.log(Number(tabPosition[0]) + " " + Number(tabPosition[1]))
            console.log(this.intPositionXCreuser + " " + this.intPositionYCreuser)



            //tabChar[Number(tabPositionsCreuser[0].toString().at(0) + tabPositionsCreuser[0].toString().at(1))][Number(tabPositionsCreuser[0].toString().at(2) + tabPositionsCreuser[0].toString().at(3))] = '4'
            //tabPositionsCreuser.shift()


            // for (let i = 0; i < tabPositionsCreuser.length; i++){
            //     tabChar[tabPositionsCreuser[0].toString().at(0) + tabPositionsCreuser[0].toString().at(1)][tabPositionsCreuser[0].toString().at(2) + tabPositionsCreuser[0].toString().at(3)] = '1'
            // }

        }
    }
    //console.log(tabPositionsCreuser)
    this.objDateHeure_1 = objDateHeure_2;
}
