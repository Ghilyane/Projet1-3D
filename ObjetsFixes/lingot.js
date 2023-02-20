var objImgLingot = null;

function Lingot() {
}

function initLingot() {
    objImgLingot = new Image();
    objImgLingot.src = './Images/gold.jpg';
}


Lingot.prototype.dessinerLingot = function (objC2D) {
    objC2D.save();
    objC2D.translate(intLargeur, intHauteur);
    
    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "2") {
                    objC2D.drawImage(objImgLingot, j * intLargeur, i * intHauteur, intLargeur, intHauteur);
            }
        }
    }

    objC2D.restore();
}

//créer une pièce qui tourne (un peu comme le yin-yang)
//remplacer par des 1$ ou 2$