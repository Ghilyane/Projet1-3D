function Brique(intHauteur, intLargeur) {
    this.intHauteur = intHauteur;
    this.intLargeur = intLargeur;
    this.binTroue = false;
}


//pas obligatoire pour certains
function initBrique(objImgBrique) {
    objImgBrique.src = './Images/brique.png';
}

Brique.prototype.dessinerBrique = function (objC2D) {
    objC2D.save();

    var tabElements = creerTabChar(tabInitial);
    this.intHauteur = objCanvas.height / 17;
    this.intLargeur = objCanvas.width / 28;
    
    for (var i = 0; i < tabElements.length; i++) {
        for (var j = 0; j < tabElements[0].length; j++) {
            if (tabElements[i][j] == "1") {
                // console.log(2) 
                // console.log(typeof objImgBrique);
                objC2D.drawImage(objImgBrique, j * this.intLargeur, i * this.intHauteur, objCanvas.width / 28, objCanvas.height / 17);
            }
        }
    }

    objC2D.restore();
}

