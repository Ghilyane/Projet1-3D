
function Runner(intHauteur, intLargeur) {
    this.intHauteur = intHauteur;
    this.intLargeur = intLargeur;
    this.intX = objCanvas.width / 2;
    this.intY = (objCanvas.height/8)*5;
    this.intHauteur = intHauteur
    this.intLargeur = intLargeur
    this.intX = objCanvas.width / 2
    this.intY = (objCanvas.height / 8) * 5.2
    this.deplX = objCanvas.width / 2;
    this.deplY = (objCanvas.height / 8) * 5
    this.intPied = this.intX + this.intHauteur;
    this.intGauche = this.intLargeur - this.intX;
    this.fltXVitesse = 0; //constante
    this.fltYTomber = 0; // constante 
    this.fltYMonter = 0; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 5;
    this.binDeplacableX = false;
    this.binDeplacableY = false;


    //ne pas se déplacer avec intX, intY, mais avex deplX, deplY
    //dans init donner : deplX = intX, deplY = intY
    //test
    this.binMonter = false;
}

//variables de temps
// fltvitesse 
// flt

Runner.prototype.dessinerLodeRunner = function (objC2D) {
    objC2D.save();

    // console.log("X : " + this.intX + " Y : " + this.intY)
    this.intHauteur = 30;
    this.intLargeur = 25;
    objC2D.beginPath();
    objC2D.fillStyle = 'blue';
    objC2D.fillRect(this.intX, this.intY, this.intLargeur, this.intHauteur);
    // objC2D.fillRect(this.intX, intHauteur*15, this.intLargeur, intHauteur);
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
            this.binDeplacableX = (this.intX - (2 * this.intVitesse) / 5) >= objMur.intXFin

            //level 1
            this.binMonter = this.intX <= 190 && this.intY == 455

            break;
        case 38:
            var objMur = tabObjMurs[1];
            this.intDirection = -1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY - this.intVitesse) >= objMur.intYFin

            //arriver au 2eme level ne plus monter
            if (this.intY == 395){
                this.binMonter = false
            }
            //level 2 (à droite)
            if (this.intX == 775 && this.intY == 395){
                this.binMonter = true
            }
            //level 2 (à gauche)
            if (this.intX == 375 && this.intY == 395){
                this.binMonter = true
            }
            //level 3 (à gauche)
            if (this.intX == 375 && this.intY == 305){
                this.binMonter = false
            }
            //level 3 (à droite)
            if (this.intX == 775 && this.intY == 210){
                this.binMonter = false
            }
            //collision level 3 à gauche
            if (this.intX == 115 && this.intY == 305){
                this.binMonter = true
            }
            //level 4 (à gauche)
            if (this.intX == 115 && this.intY == 210){
                this.binMonter = false
            }
            //collision level 3 à droite
            if (this.intX == 960 && this.intY == 210){
                this.binMonter = true
            }
            if (this.intX == 960 && this.intY == 120){
                this.binMonter = false
            }
            //collision level 4 à droite
            if (this.intX == 300 && this.intY == 210){
                this.binMonter = true
            }
            if (this.intX == 300 && this.intY == 60){
                this.binMonter = false
            }

            break;
        case 39:
            var objMur = tabObjMurs[2];
            this.intDirection = 1;
            this.binDeplacableY = false;
            this.binDeplacableX = (this.intX + (2 * this.intVitesse) / 5 + this.intLargeur + (objMur.intXDebut - objMur.intXFin)) <= objMur.intXDebut

            //level 1
            this.binMonter = this.intX == 1030 && this.intY == 455 

            break;
        case 40:
            var objMur = tabObjMurs[3];
            this.intDirection = 1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY + this.intVitesse + (15 * this.intHauteur) / 2.2) <= objMur.intYDebut
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY) {
        this.intX += this.intVitesse * this.intDirection
        console.log(2)
    }

    if (this.binDeplacableY && !this.binDeplacableX && this.binMonter) {
        this.intY += this.intVitesse * this.intDirection
        console.log(3)
    }


    console.log("X : " + this.binDeplacableX + " Y : " + this.binDeplacableY + " monter : " + this.binMonter + " "  + " runner X: " + this.intX + " runner Y: " + this.intY)

}

