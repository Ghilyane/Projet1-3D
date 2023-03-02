var objImgLingot = null;
var intNbLingot = 6;

function Lingot() {
    this.binDisparition = false;
    this.binEnDeplacement = false;
}

function initLingot() {
    objImgLingot = new Image();
    objImgLingot.src = './Images/gold.jpg';
}


Lingot.prototype.dessinerLingot = function (objC2D) {
    objC2D.save();
    objC2D.translate(intLargeur + intLargeur*0.15, intHauteur + intHauteur*0.3);
    // objC2D.translate(intLargeur, intHauteur);
    
    for (var i = 0; i < tabChar.length; i++) {
        for (var j = 0; j < tabChar[0].length; j++) {
            if (tabChar[i][j] == "2") {
                objC2D.drawImage(objImgLingot, j * intLargeur, i * intHauteur, intLargeur * 0.7, intHauteur * 0.7);
                // objC2D.drawImage(objImgLingot, j * intLargeur, i * intHauteur, intLargeur, intHauteur);

            }
        }
    }

    objC2D.restore();
}


Lingot.prototype.mettreAJourLingot = function () {

    // var posX = Math.floor(lodeRunner.intX / intLargeur) - 1
    // var posY = Math.floor(lodeRunner.intY / intHauteur) - 1

    // var binCollisionLingot = tabChar[posY][posX] == '2';

    // if (binCollisionLingot) {
    //     tabChar[posY][posX] = '.';
    //     intNbLingot--;
    // }



    //1 - Quand le lodeRunner est dans la même cellule qu'un lingot, faire disparaître le lodeRunner.
    /*
    --> SQUELETTE

    if (this.binDisparition) {
        intNbLingot--;
    }
    else {
        intNbLingot++;
    }
    var intNbLingots = 6;

            a) Créer une méthode de type : quand le lodeRunner est dans la même cellule qu'un des six lingots.
                    ->créer un tableau de boolean;


            b) Si le lodeRunner se retrouve dans la même cellule qu'un lingot, parcourir le tableau de char et modifier 
            la valeur du lingot par un point
                i,j déclarées à l'avance correspondant aux points x et y
            c) mettre la propriété this.binDisparition à true

    Idée similaire pour la brique
    --> sauf qu'il faut utiliser la logique du chronomètre et de l'alarme, car le trou doit se refermer après 8sec.
    */
}
