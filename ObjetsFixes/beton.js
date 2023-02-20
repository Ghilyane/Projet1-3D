var objImgBeton = null;
function Beton() {
}

//pas obligatoire pour certains
function initBeton() {
    objImgBeton = new Image();
    objImgBeton.src = './Images/beton.jpg';
}

Beton.prototype.dessinerBeton = function(objC2D) {
    objC2D.save();

    objC2D.translate(intLargeur, intHauteur);
    
    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "5") {
                objC2D.drawImage(objImgBeton, j*intLargeur, i*intHauteur, intLargeur, intHauteur);
            }
        }
    }

    objC2D.restore();
}