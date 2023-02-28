var objImgEchelle = null;

function Echelle() {
}

function initEchelle() {
    objImgEchelle = new Image();
    objImgEchelle.src = './Images/ladder2.png';
    tabObjEchelles = new Array()
}

Echelle.prototype.dessinerEchelle = function (objC2D) {
    objC2D.save();
    objC2D.translate(intLargeur, intHauteur);
    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "3") {
                objC2D.drawImage(objImgEchelle, j * intLargeur, i * intHauteur, intLargeur, intHauteur);
                objC2D.fillStyle = 'white'
                objC2D.fillText(j + ', ' + i , j * intLargeur, i * intHauteur)
            }
        }
    }
    objC2D.restore();
}





