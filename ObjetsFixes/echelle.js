// function Echelle(){
//     let objEchelle = new Object()
//     objEchelle.X = 0
//     objEchelle.Y = 0
//     objEchelle.intLargeur = 5
//     objEchelle.intHauteur = 3
//     objEchelle.strCouleur = 'yellow'

//     return objEchelle
// }

function Echelle(intHauteur, intLargeur) {
    this.intHauteur = intHauteur;
    this.intLargeur = intLargeur;
    this.binTroue = false;
}



function initEchelle(objImgEchelle) {
    objImgEchelle = new Image();
    objImgEchelle.src = './Images/ladder2.png';
}


Echelle.prototype.dessinerEchelle = function (objC2D, objImgEchelle) {
    objC2D.save();

    var tabElements = creerTabChar(tabInitial);
    this.intHauteur = objCanvas.height / 17;
    this.intLargeur = objCanvas.width / 28;
    
    for (var i = 0; i < tabElements.length; i++) {
        for (var j = 0; j < tabElements[0].length; j++) {
            if (tabElements[i][j] == "3") {
                // console.log(typeof objImgEchelle);
                objC2D.drawImage(imgEchelle, j * this.intLargeur, i * this.intHauteur, objCanvas.width / 28, objCanvas.height / 17);
            }
        }
    }

    objC2D.restore();
}