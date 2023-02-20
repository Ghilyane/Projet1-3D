var objImgCorde = null;

function Corde() {
}

function initCorde() {
    objImgCorde = new Image();
    objImgCorde.src = './Images/corde.png';
}


Corde.prototype.dessinerCorde = function (objC2D) {
    objC2D.save();

    objC2D.translate(intLargeur, intHauteur);

    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "4") {
                objC2D.drawImage(objImgCorde, j * intLargeur, i* intHauteur, intLargeur, intHauteur);
            }
        }
    }
    objC2D.restore();
}