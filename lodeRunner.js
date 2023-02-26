
function Runner(intHauteur, intLargeur) {
    this.intHauteur = intHauteur * 0.90;
    this.intLargeur = intLargeur * 0.65;
    this.intX = objCanvas.width / 2;
    this.intY = intHauteur * 16 - this.intHauteur / 2;
    // this.deplX = this.intX;
    // this.deplY = this.intY;

    this.fltXVitesse = 0; //constante
    this.fltYTomber = 0; // constante 
    this.fltYMonter = 3; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 5;
    this.binDeplacableX = false;
    this.binDeplacableY = false;
    //ne pas se déplacer avec intX, intY, mais avex deplX, deplY
    //dans init donner : deplX = intX, deplY = intY
}

//variables de temps
// fltvitesse 
// flt

Runner.prototype.dessinerLodeRunner = function (objC2D) {
    objC2D.save();
    objC2D.translate(this.intX, this.intY)
    objC2D.scale(intLargeur, intHauteur);
    objC2D.beginPath();
    objC2D.fillStyle = 'blue';
    objC2D.fillRect(-this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2, this.intLargeur / intLargeur, this.intHauteur / intHauteur);
    // Créer la régulation des mouvements
    objC2D.restore();
}

function miseAJourLode() {
    // intX++;

    // if (intX >= objCanvas.width) {
    //     intX = 0;
    // }
}

Runner.prototype.gererDeplacementRunner = function () {
    switch (event.keyCode) {
        //37 - gauche
        //38 - haut
        //39 - droite
        //40 - bas

        case 37:
            var objMur = tabObjMurs[0];
            this.intDirection = -1;
            this.binDeplacableY = false;
            this.binDeplacableX = (this.intX - this.intLargeur/2 - this.intVitesse) >= objMur.intXFin
            break;
        case 38:
            var objMur = tabObjMurs[1];
            this.intDirection = -1;
            this.binDeplacableX = false;
            this.binDeplacableY =  (this.intY - this.intHauteur/2 -this.fltYMonter) >= objMur.intYFin


            //arriver au 2eme level ne plus monter
            // if (this.intY == 395){
            //     this.binMonter = false
            // }
            // //level 2 (à droite)
            // if (this.intX == 775 && this.intY == 395){
            //     this.binMonter = true
            // }
            // //level 2 (à gauche)
            // if (this.intX == 375 && this.intY == 395){
            //     this.binMonter = true
            // }
            // //level 3 (à gauche)
            // if (this.intX == 375 && this.intY == 305){
            //     this.binMonter = false
            // }
            // //level 3 (à droite)
            // if (this.intX == 775 && this.intY == 210){
            //     this.binMonter = false
            // }
            // //collision level 3 à gauche
            // if (this.intX == 115 && this.intY == 305){
            //     this.binMonter = true
            // }
            // //level 4 (à gauche)
            // if (this.intX == 115 && this.intY == 210){
            //     this.binMonter = false
            // }
            // //collision level 3 à droite
            // if (this.intX == 960 && this.intY == 210){
            //     this.binMonter = true
            // }
            // if (this.intX == 960 && this.intY == 120){
            //     this.binMonter = false
            // }
            // //collision level 4 à droite
            // if (this.intX == 300 && this.intY == 210){
            //     this.binMonter = true
            // }
            // if (this.intX == 300 && this.intY == 60){
            //     this.binMonter = false
            // }





            break;
        case 39:
            var objMur = tabObjMurs[2];
            this.intDirection = 1;
            this.binDeplacableY = false;
            this.binDeplacableX =  (this.intX + this.intLargeur/2 + this.intVitesse)  <= objMur.intXFin
            break;
        case 40:
            var objMur = tabObjMurs[3];
            this.intDirection = 1;
            this.binDeplacableX = false;
            this.binDeplacableY =  (this.intY + this.intHauteur/2 + this.fltYMonter + intHauteur*5) <= objMur.intYDebut
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY){
        this.intX += this.intVitesse * this.intDirection
    }

    if (this.binDeplacableY && !this.binDeplacableX) {
        this.intY += this.fltYMonter * this.intDirection
    }

    console.log(Math.round(this.intX / 30) + ", " + Math.round(this.intY / 30))
    //console.log("X : " + this.binDeplacableX + " Y : " + this.binDeplacableY + " monter : " + this.binMonter + " "  + " runner X: " + this.intX + " runner Y: " + this.intY)

}

