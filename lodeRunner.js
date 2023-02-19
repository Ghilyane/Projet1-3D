
function Runner(intHauteur, intLargeur) {
    this.intHauteur = intHauteur
    this.intLargeur = intLargeur
    this.intX = objCanvas.width / 2
    this.intY = (objCanvas.height/8)*5
    this.deplX = objCanvas.width / 2;
    this.deplY = (objCanvas.height/8)*5
    this.intPied = this.intX + this.intHauteur;
    this.intGauche = this.intLargeur - this.intX;
    this.fltXVitesse = 0; //constante
    this.fltYTomber = 0; // constante 
    this.fltYMonter = 0; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 5;
    this.binDeplacableX = false;
    this.binDeplacableY = false;
}

//variables de temps
// fltvitesse 
// flt

Runner.prototype.dessinerLodeRunner = function (objC2D) {
    objC2D.save();

    // console.log("X : " + this.intX + " Y : " + this.intY)
    this.intHauteur = 50;
    this.intLargeur = 25;
    objC2D.beginPath();
    objC2D.fillStyle = 'blue';
    objC2D.fillRect(this.intX, this.intY, this.intLargeur, this.intHauteur);
    objC2D.restore();
}

function miseAJourLode() {
    // intX++;
		
    // if (intX >= objCanvas.width) {
    //     intX = 0;
    // }
}

Runner.prototype.gererDeplacementRunner = function() {
    switch (event.keyCode) {
        //37 - gauche
        //38 - haut
        //39 - droite
        //40 - bas
        
        case 37:
            var objMur = tabObjMurs[0];
            this.intDirection = -1;
            this.binDeplacableY = false;
            this.binDeplacableX = (this.intX - (2*this.intVitesse)/5) >= objMur.intXFin
            break;
        case 38:
            var objMur = tabObjMurs[1];
            this.intDirection = -1;
            this.binDeplacableX = false;
            this.binDeplacableY =  (this.intY - this.intVitesse) >= objMur.intYFin
            break;
        case 39:
            var objMur = tabObjMurs[2];
            this.intDirection = 1;
            this.binDeplacableY = false;
            this.binDeplacableX = (this.intX + (2*this.intVitesse)/5 + this.intLargeur + (objMur.intXDebut - objMur.intXFin)) <= objMur.intXDebut
        break;
        case 40:
            var objMur = tabObjMurs[3];
            this.intDirection = 1;
            this.binDeplacableX = false;
            this.binDeplacableY =  (this.intY +  this.intVitesse + (10*this.intHauteur)/2.25) <= objMur.intYDebut
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY){
        this.intX += this.intVitesse * this.intDirection
        // console.log(2)
    }

    if (this.binDeplacableY && !this.binDeplacableX) {
        this.intY += this.intVitesse * this.intDirection
        // console.log(3)
    }


    console.log("X : " + this.binDeplacableX + " Y : " + this.binDeplacableY)


}

