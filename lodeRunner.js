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

let binCollisionEchelle = false
let binCollisionLingot = false
let binCollisionCorde = false
let binCollisionBrique = false
let binCollisionVide = false
let binCollisionGarde = false
let nbrLingotsRamasse = 0

Runner.prototype.collision = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    /*  TODO
        ajouter condition qui dit qu'il peut descendre les echelles
        creuser un trou gauche (x = 88) ou droite (z = 90)
        faire chuter lorsqu'il est dans le vide
        faire chuter lorsqu'il rentre dans un trou
    */
    

    binCollisionEchelle = tabChar[posY][posX] == '3' || tabChar[posY][posX] == '6' &&
        Math.abs(this.intX - this.intLargeur / 2 - intLargeur) < Math.floor(this.intX / intLargeur) * intLargeur &&
        this.intX > Math.floor(this.intX / intLargeur) * intLargeur



    //En contact avec un lingot
    binCollisionLingot = tabChar[posY][posX] == '2'
    if (binCollisionLingot) {
        nbrLingotsRamasse++
        objSons.ramasseLingot.play()
        tabChar[posY][posX] = '.'
        intScore = (Number(intScore) + 250).toString().padStart(7, '0')
    }

    //Dessiner l'echelle de niveau lorsque le runner ramasse tout les lingots
    if (nbrLingotsRamasse == 6) {
       echelle.binAjoutEchelleNiveau = true
    }

    binCollisionCorde = tabChar[posY][posX] == '4'

    binCollisionBrique = tabChar[posY + 1][posX] == '1'

    //Faire tomber lorsque le runner est dans le vide
    binCollisionVide = tabChar[posY][posX] == '.' && !binCollisionEchelle && !binCollisionCorde && !binCollisionBrique && !binCollisionLingot
    if (binCollisionVide) {
        console.log('vide')
    }

    console.log('echelle: ' + binCollisionEchelle + '\n' + 'lingot: ' + binCollisionLingot + '\n'
        + 'corde: ' + binCollisionCorde + '\n' + 'brique: ' + binCollisionBrique + '\n' + 'vide: ' + binCollisionVide)
}

Runner.prototype.creuserAGauche = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1
   
    tabChar[posY+1][posX] = '.'
}

Runner.prototype.creuserADroite = function () {
    
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
            break;
        case 38:
            var objMur = tabObjMurs[1];
            this.intDirection = -1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY - this.intHauteur / 2 - this.fltYMonter) >= objMur.intYFin
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
        case 88:
                lodeRunner.creuserAGauche()
            break;
        case 90:
                lodeRunner.creuserADroite()
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY) {
        this.intX += this.intVitesse * this.intDirection
    }

    if (this.binDeplacableY && !this.binDeplacableX && binCollisionEchelle) {
        this.intY += this.intMonter * this.intDirection
    }


    lodeRunner.collision()
}

