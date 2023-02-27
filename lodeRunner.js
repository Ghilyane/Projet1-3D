
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
    this.binMonter = false
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

    objC2D.font = '1pt Arial'

    objC2D.fillText(Math.floor(this.intX / 30) - 1 + ', ' + (Math.floor(this.intY / 30) - 1), -this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2)
    // Créer la régulation des mouvements
    objC2D.restore();
}

function miseAJourLode() {
    // intX++;

    // if (intX >= objCanvas.width) {
    //     intX = 0;
    // }
}
let tabEchelles = new Array()

function collision() {
    for (i = 0; i < tabEchelles.length; i++) {
        const echelleStatic = {
            x: tabEchelles[i].x,
            y: tabEchelles[i].y,
            width: tabEchelles[i].largeur,
            height: tabEchelles[i].hauteur
        }

        let overlapX = false

        overlapX = this.intX > echelleStatic.x + echelleStatic.width && this.intX + this.intLargeur > echelleStatic.x
        overlapY = this.intY < echelleStatic.y + echelleStatic.height && this.intY + this.intHauteur > echelleStatic.y


        if (overlapX && overlapY) {
            console.log('Collision #' + i)
        }

    }
}

Runner.prototype.gererDeplacementRunner = function () {
    console.log(tabEchelles)

    switch (event.keyCode) {
        //37 - gauche
        //38 - haut
        //39 - droite
        //40 - bas

        case 37:
            var objMur = tabObjMurs[0];
            this.intDirection = -1;
            this.binDeplacableY = false;
            this.binDeplacableX = (this.intX - this.intLargeur / 2 - this.intVitesse) >= objMur.intXFin

            for (var i = 0; i < tabChar.length; i++) {
                for (var j = 0; j < tabChar[0].length; j++) {
                    if (tabChar[i][j] == "3") {
                        const echelle = {
                            x: (j * this.intLargeur) / 30,
                            y: (i * this.intHauteur) / 30,
                            largeur: objCanvas.width / 30,
                            hauteur: objCanvas.height / 30
                        }
                        // this.binMonter = Math.floor(this.intX / 30) - 1 > echelle.x + echelle.largeur &&
                        //     Math.floor(this.intX) - 1 + this.intLargeur / 0.9 > echelle.x
                        // //console.log(Math.floor(this.intX / 30) > echelle.x + echelle.largeur)
                        // let overlapY = Math.floor(this.intY / 30) - 1 < echelle.y + echelle.hauteur && 
                        //     Math.floor(this.intY) - 1 + this.intHauteur > echelle.y

                        // console.log(Math.floor(this.intX / 30) - 1)
                        // console.log(echelle.x + echelle.largeur)
                        tabEchelles.push(echelle)

                    }
                }
            }


            //console.log(tabEchelles.sort((x1, x2) => (x1.x < x2.x) ? 1 : (x1.x > x2.x) ? -1 : 0))
            //console.log(this.binMonter && overlapY)
            break;
        case 38:
            var objMur = tabObjMurs[1];
            this.intDirection = -1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY - this.intHauteur / 2 - this.fltYMonter) >= objMur.intYFin


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
            this.binDeplacableX = (this.intX + this.intLargeur / 2 + this.intVitesse) <= objMur.intXFin


            break;
        case 40:
            var objMur = tabObjMurs[3];
            this.intDirection = 1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY + this.intHauteur / 2 + this.fltYMonter + intHauteur * 5) <= objMur.intYDebut
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY) {
        this.intX += this.intVitesse * this.intDirection
    }

    if (this.binDeplacableY && !this.binDeplacableX && this.binMonter) {
        this.intY += this.fltYMonter * this.intDirection
    }

    collision()
}

