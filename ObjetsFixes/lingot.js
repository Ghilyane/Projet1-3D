var objImgLingot = null;

function Lingot() {
    this.binDisparition = false;
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


Lingot.prototype.mettreAJourLingot = function (objC2D) {



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
                Exemple : 
                    var numeroPerguntas = 5;     
                    var anyBoxesChecked = new Array(numeroPerguntas).fill(false);
                    console.log(anyBoxesChecked);

            b) Si le lodeRunner se retrouve dans la même cellule qu'un lingot, parcourir le tableau de char et modifier 
            la valeur du lingot par un point
                i,j déclarées à l'avance correspondant aux points x et y
            c) mettre la propriété this.binDisparition à true

    Idée similaire pour la brique
    --> sauf qu'il faut utiliser la logique du chronomètre et de l'alarme, car le trou doit se refermer après 8sec.
    */
}
