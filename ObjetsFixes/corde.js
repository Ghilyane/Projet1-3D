function Corde(intHauteur, intLargeur) {
    this.intHauteur = intHauteur;
    this.intLargeur = intLargeur;
    this.binTroue = false;
}



function initCorde(objImgCorde) {
    objImgCorde.src = './Images/corde.png';
}


Corde.prototype.dessinerCorde = function (objC2D, objImgCorde) {
    objC2D.save();

    var tabElements = creerTabChar(tabInitial);
    this.intHauteur = objCanvas.height / 17;
    this.intLargeur = objCanvas.width / 28;
    
    for (var i = 0; i < tabElements.length; i++) {
        for (var j = 0; j < tabElements[0].length; j++) {
            if (tabElements[i][j] == "4") {
                // console.log(2) 
                // console.log(typeof objImgCorde);
                objC2D.drawImage(objImgCorde, j * this.intLargeur, i * this.intHauteur, objCanvas.width / 28, objCanvas.height / 17);
            }
        }
    }

    objC2D.restore();
}