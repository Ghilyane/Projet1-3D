function Beton(intHauteur, intLargeur) {
    this.intHauteur = intHauteur;
    this.intLargeur = intLargeur;
    this.binTroue = false;
}


//pas obligatoire pour certains
function initBeton() {
    objImgBeton.src = './Images/béton.jpg';
}

Beton.prototype.dessinerBeton = function(objC2D) {

    objC2D.save();

    tabElements = creerTabChar(tabInitial);

    this.intHauteur = objCanvas.height / 17;
    this.intLargeur = objCanvas.width / 28;

    for (var i = 0; i < tabElements.length; i++) {
        for (var j = 0; j < tabElements[0].length; j++) {
            if (tabElements[i][j] == "5") {
                objC2D.drawImage(objImgBeton, j * this.intLargeur, i * this.intHauteur, objCanvas.width / 28, objCanvas.height / 17);
            }
        }
    }

    objC2D.restore();

}