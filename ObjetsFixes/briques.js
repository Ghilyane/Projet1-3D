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

