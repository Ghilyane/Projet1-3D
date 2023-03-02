var intIndexDessinGarde = 0;
var intDessinRalentirGarde = 0;
var intGaucheOUDroiteGarde  = 0;

function Garde(intHauteur, intLargeur) {
    this.intHauteur = intHauteur * 0.90;
    this.intLargeur = intLargeur * 0.65;
    this.intX = objCanvas.width / 2;
    this.intY = intHauteur * 16 - this.intHauteur / 2;
    this.intTomber = 4; // constante 
    this.intMonter = 3; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 5;
    this.binDeplacableX = false;
    this.binDeplacableY = false;
    this.binMonter = false;
    this.binCourir = false;
    this.binTraverserCorde = false;
}


Garde.prototype.dessinerGarde = function (objC2D) {
    objC2D.save();
    objC2D.translate(this.intX, this.intY)
    objC2D.scale(intLargeur, intHauteur);
    objC2D.beginPath();

    if (intGaucheOUDroite == 0) {
        objC2D.scale(1, 1);
    }
    else {
        objC2D.scale(-1, 1);
    }

    if (this.binCourir) {
        gardeAnimationCourir[intIndexDessinGarde]('');
    }
    else if (!this.binCourir) {
        gardeAnimationCourir[2]('');
    }
    else if (this.binMonter) {
        gardeAnimationMonter[intIndexDessinGarde]('');
    }

    // objC2D.fillStyle = 'blue';
    // objC2D.font = objCanvas.width / 1000 + 'pt Arial'

    // objC2D.fillText(Math.floor(this.intX / intLargeur) - 1 + ', ' + (Math.floor(this.intY / intHauteur) - 1), -this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2)
    // Créer la régulation des mouvements
    objC2D.restore();
}

Garde.prototype.mettreAJourGarde = function() {
    intDessinRalentirGarde++;

    //Courir sur les briques
    if (intDessinRalentir >=10 && this.binCourir) {
        intDessinRalentirGarde = 0
        intIndexDessinGarde = (intTest < gardeAnimationCourir.length -1) ? intTest+1 : 0;
    }

    //Monter les escaliers
    if (intDessinRalentir >=8 && this.binMonter) {
        intDessinRalentir = 0
        intIndexDessinGarde = (intTest < gardeAnimationMonter.length -1) ? intTest+1 : 0;
    }
}
