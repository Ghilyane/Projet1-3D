var intTest = 0;
var intDessinRalentir = 0;
var intGaucheOUDroite  = 0;

function Runner(intHauteur, intLargeur) {
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


Runner.prototype.dessinerLodeRunner = function (objC2D) {
    objC2D.save();
    objC2D.translate(this.intX, this.intY)
    objC2D.scale(intLargeur, intHauteur);
    objC2D.beginPath();
    // objC2D.fillStyle = 'blue';
    // objC2D.fillRect(-this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2, this.intLargeur / intLargeur, this.intHauteur / intHauteur);

    // dessinerLodeR() //Créer boolean binCourir, binMonter, binTraverserCorde ===> Utiliser tout cela dans animation et non dans dessiner
    if (intGaucheOUDroite == 0) {
        objC2D.scale(1, 1);
    }
    else {
        objC2D.scale(-1, 1);
    }

    if (this.binCourir) {
        lodeAnimationCourir[intTest]('');
    }
    else if (!this.binCourir) {
        lodeAnimationCourir[2]('');
    }
    else if (this.binMonter) {
        lodeAnnimationMonter[intTest]('');
    }

    objC2D.fillStyle = 'blue';
    objC2D.font = objCanvas.width / 1000 + 'pt Arial'

    objC2D.fillText(Math.floor(this.intX / intLargeur) - 1 + ', ' + (Math.floor(this.intY / intHauteur) - 1), -this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2)
    // Créer la régulation des mouvements
    objC2D.restore();
}


Runner.prototype.mettreAJourLode = function() {
    intDessinRalentir++;

    //Courir sur les briques
    if (intDessinRalentir >=10 && this.binCourir) {
        intDessinRalentir = 0
        intTest = (intTest < lodeAnimationCourir.length -1) ? intTest+1 : 0;
    }

    //Monter les escaliers
    if (intDessinRalentir >=8 && this.binMonter) {
        intDessinRalentir = 0
        intTest = (intTest < lodeAnnimationMonter.length -1) ? intTest+1 : 0;
    }
}

let tabEchelles = new Array()

for (var i = 0; i < tabChar.length; i++) {
    for (var j = 0; j < tabChar[0].length; j++) {
        if (tabChar[i][j] == "3") {
            const echelle = {
                x: j,
                y: i,
                largeur: objCanvas.width / 30,
                hauteur: objCanvas.height / 30
            }

            tabEchelles.push(echelle)
        }
    }
}


let overlapX = false
let overlapY = false

Runner.prototype.gererImmobilite = function() {
    this.binCourir = false;
}


Runner.prototype.collision = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1
    let echelleStatic = new Object()
    let binCollision = false

    //floor 
    binCollision = tabChar[posY][posX] == '3' &&
        Math.abs(this.intX - this.intLargeur / 2 - intLargeur) < Math.floor(this.intX / intLargeur) * intLargeur &&
        this.intX > Math.floor(this.intX / intLargeur) * intLargeur

    //console.log(Math.floor(this.intX / intLargeur) * intLargeur - intLargeur)
    //console.log('pos runner: ' + (Math.abs(this.intX - this.intLargeur / 2 - intLargeur)) + ' fin cell: ' + (Math.floor(this.intX / intLargeur) * intLargeur))
    for (let i = 0; i < tabEchelles.length; i++) {
        echelleStatic = {
            x: tabEchelles[i].x,
            y: tabEchelles[i].y,
            width: tabEchelles[i].largeur,
            height: tabEchelles[i].hauteur
        }

        // overlapX = Math.floor(this.intX / 30) > echelleStatic.x + echelleStatic.width && Math.floor(this.intX / 30) + this.intLargeur > echelleStatic.x
        // overlapY = Math.floor(this.intY / 30) - 1 < echelleStatic.y + echelleStatic.height && Math.floor(this.intY / 30) - 1 + this.intHauteur > echelleStatic.y
        // posX = Math.floor(this.intX / intLargeur)
        // posY = Math.floor(this.intY / intHauteur)


        if (overlapX && overlapY) {
            console.log('Collision #' + i)
        }

    }
    //console.log(Object.keys(echelleStatic))
    //console.log(Math.floor(this.intX / 30) - 1 + ', ' + (Math.floor(this.intY / 30) - 1))
    // console.log('X: ' + overlapX + ' Y: ' + overlapY)
    // console.log(Math.floor(this.intX / 30) + "          " )
    console.log(binCollision)
}

Runner.prototype.gererDeplacementRunner = function () {
    switch (event.keyCode) {
        //37 - gauche
        //38 - haut
        //39 - droite
        //40 - bas
        case 37:
            intGaucheOUDroite = 1;
            this.binCourir = true
            var objMur = tabObjMurs[0];
            this.intDirection = -1;
            this.binDeplacableY = false;
            this.binDeplacableX = (this.intX - this.intLargeur / 2 - this.intVitesse) >= objMur.intXFin

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
            intGaucheOUDroite = 0;
            this.binCourir = true
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

    lodeRunner.collision()
}

