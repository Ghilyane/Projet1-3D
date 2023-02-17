
function Runner(intHauteur, intLargeur) {
    this.intHauteur = intHauteur
    this.intLargeur = intLargeur
    this.intX = objCanvas.width / 2
    this.intY = (objCanvas.height/8)*5
    this.deplX = objCanvas.width / 2;
    this.deplY = (objCanvas.height/8)*5
    this.fltXVitesse = 0; //constante
    this.fltYTomber = 0; // constante 
    this.fltYMonter = 0; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 2;
    this.binDeplacable = true;
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
            // console.log("gauche");
            this.intDirection = -1;
            this.binDeplacable = (this.intX + this.intLargeur + this.intVitesse) >= objCanvas.width
            this.binDeplacable = true;
            break;
        case 39:
            // console.log("droite");
            this.intDirection = 1;
            this.binDeplacable = (this.intX - this.intVitesse) <= objCanvas.width
            break;
    }

    if (this.binDeplacable){
        this.intVitesse = 5;
        this.intX += this.intVitesse * this.intDirection
    }

    console.log(this.binDeplacable);

}

