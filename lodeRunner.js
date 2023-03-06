var intDessinerCourir = 0;
var intDessinerEchelle = 0;
var intDessinRalentir = 0;
var intGaucheOUDroite = 0;

function Runner(intHauteur, intLargeur) {
    this.intHauteur = intHauteur * 0.90;
    this.intLargeur = intLargeur * 0.65;
    this.intX = objCanvas.width / 2;
    this.intY = intHauteur * 16 - this.intHauteur / 2;
    this.intTomber = 2; // constante 
    this.intMonter = 3; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 5;
    this.binDeplacableX = false;
    this.binDeplacableY = false;
    this.binMonter = false;
    this.binCourir = true;
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

    if (binCollisionBrique && this.binCourir) { // et s'il est sur une brique
        lodeAnimationCourir[intDessinerCourir]('');
    }
    else if (binCollisionEchelle) {  // et s'il est sur une échelle 
        lodeAnimationMonter[intDessinerEchelle]('');
    }
    else if (binCollisionCorde) { // et s'il est sur une corde
        dessinerLodeRCorde();
    }
    else {
        dessinerLodeR();
    }

    objC2D.fillStyle = 'blue';
    objC2D.font = objCanvas.width / 1000 + 'pt Arial'

    objC2D.fillText(Math.floor(this.intX / intLargeur) - 1 + ', ' + (Math.floor(this.intY / intHauteur) - 1), -this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2)
    objC2D.restore();
}


Runner.prototype.mettreAJourLode = function () {
    intDessinRalentir++;

    //Courir sur les briques
    if (intDessinRalentir >=10 && binCollisionBrique) {
        intDessinRalentir = 0
        intDessinerCourir = (intDessinerCourir < lodeAnimationCourir.length -1) ? intDessinerCourir+1 : 0;
    }

    //Monter les escaliers
    if (intDessinRalentir >=15 && binCollisionEchelle) {
        intDessinRalentir = 0
        intDessinerEchelle = (intDessinerEchelle < lodeAnimationMonter.length -1) ? intDessinerEchelle+1 : 0;
    }

    lodeRunner.gestionCollisions();
}

// let overlapX = false
// let overlapY = false

Runner.prototype.gererImmobilite = function () {
    this.binCourir = false;
}

let binCollisionEchelle = false
let binCollisionEchelleNiveau = false
let binCollisionLingot = false
let binCollisionCorde = false
let binCollisionBrique = false
var binCollisionBriqueG = false;
var binCollisionBriqueD = false;
let binCollisionVide = false
let binCollisionGarde = false
let nbrLingotsRamasse = 0
let binCompleteNiveau = false
var binLaisserTomber = false;

Runner.prototype.collision = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    var posXG = Math.floor(garde.intX / intLargeur) - 1
    var posYG = Math.floor(garde.intY / intHauteur) - 1

    binCollisionEchelleNiveau = tabChar[posY][posX] == '6' &&
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

    // binCollisionCorde = tabChar[posY][posX] == '4'
    binCollisionBrique = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';

    //Faire tomber lorsque le runner est dans le vide
    binCollisionVide = tabChar[posY][posX] == '.' && !binCollisionEchelle && !binCollisionBrique && !binCollisionLingot

    if (binCollisionVide) {
        binCollisionEchelle = Math.abs(this.intY - this.intHauteur / 2 - intHauteur) < Math.floor(this.intY / intHauteur) * intHauteur &&
            this.intY > Math.floor(this.intY / intHauteur) * intHauteur
    }
    else {
        binCollisionEchelle = tabChar[posY][posX] == '3' &&
        Math.abs(this.intX - this.intLargeur / 2 - intLargeur) < Math.floor(this.intX / intLargeur) * intLargeur &&
        this.intX > Math.floor(this.intX / intLargeur) * intLargeur    
    }
    
    //Manipuler lorsqu'il atteint l'echelle de niveau
    var objMur = tabObjMurs[1];
    binCompleteNiveau = tabChar[posY][posX] == '6' && Math.abs(this.intY - this.intHauteur / 2 - intHauteur) <= objMur.intYFin

    // console.log('echelle: ' + binCollisionEchelle + '\n' + 'lingot: ' + binCollisionLingot + '\n'
    //     + 'corde: ' + binCollisionCorde + '\n' + 'brique: ' + binCollisionBrique + '\n' + 'vide: ' + binCollisionVide + '\n' +
    //     'niveau complet: ' + binCompleteNiveau)
    console.log('garde: ' + posX == posXG)
}

let tabPositionsCreuser = new Array()


Runner.prototype.creuserAGauche = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    brique.objDateHeure_1 = Date.now()

    if (tabChar[posY + 1][posX + 1] == '1') {
        tabChar[posY + 1][posX + 1] = '.'
        objSons.creuseTrou.play()
        //Ajouter les positions des trous
        tabPositionsCreuser.push((posX + 1) + " " + (posY + 1))
        console.log(posX + 1 + " " + (posY + 1))
    }
}


Runner.prototype.creuserADroite = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    brique.objDateHeure_1 = Date.now()

    if (tabChar[posY + 1][posX - 1] == '1') {
        tabChar[posY + 1][posX - 1] = '.'
        objSons.creuseTrou.play()
        //Ajouter les positions des trous
        tabPositionsCreuser.push((posX - 1) + " " + (posY + 1))
        console.log(posX - 1 + " " + (posY + 1))
    }
}


Runner.prototype.gestionCollisions = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    // console.log((this.intY / intHauteur) % 1)
    binCollisionBrique = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';
    
    binCollisionVide = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '.' 
    || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '2'
        || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '4';

    binCollisionCorde = tabChar[Math.floor((this.intY) / intHauteur) - 1][posX] == '4' && (this.intY / intHauteur) % 1 > 0.3 
        && (this.intY / intHauteur) % 1 < 0.65 && !binCollisionBrique && (tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] != '3');

        
   //Collisions briques (gauche et droite) 
    binCollisionBriqueD = tabChar[posY][Math.floor((this.intX + this.intLargeur/2) / intLargeur) + 1] == '1' 
        && tabChar[posY][Math.floor((this.intX + this.intLargeur/2) / intLargeur) + 1] == '1' 
        binCollisionBriqueG = tabChar[posY][Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1] == '1'
        // || tabChar[posY][Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1] == '1'
    
    // console.log(binCollisionBriqueG)
    // console.log("Y : " + posY + " X : " + (Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1))

    //Créer une collision pour les côtés
    if (binCollisionVide && (!binCollisionCorde || binLaisserTomber)) {
        this.intY += this.intTomber
    }
    else {
        binLaisserTomber = false;
    }
    
    if (binCollisionCorde || binCollisionBrique) {
        binCollisionVide = false;

    }

    if (binCollisionEchelle) {

    }

    if (binCollisionBrique) {

    }
}


Runner.prototype.gererDeplacementRunner = function () {
    
    booStart = !booStart ? true: true; 
    // console.log(booStart)

    switch (event.keyCode) {
        //37 - gauche
        //38 - haut
        //39 - droite
        //40 - bas
        case 37:
                intGaucheOUDroite = 1;
                this.binCourir = true;
                var objMur = tabObjMurs[0];
                this.intDirection = -1;
                this.binDeplacableY = false;
                this.binDeplacableX = (this.intX - this.intLargeur / 2 - this.intVitesse) >= objMur.intXFin
            break;
        case 38:
            var objMur = tabObjMurs[1];
            this.intDirection = -1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY - this.intHauteur / 2 - this.intMonter) >= objMur.intYFin
            break;
        case 39:
                intGaucheOUDroite = 0;
                this.binCourir = true;
                var objMur = tabObjMurs[2];
                this.intDirection = 1;
                this.binDeplacableY = false;
                this.binDeplacableX = (this.intX + this.intLargeur / 2 + this.intVitesse) <= objMur.intXFin
            break;
        case 40:
            binLaisserTomber = true;
            var objMur = tabObjMurs[3];
            this.intDirection = 1;
            this.binDeplacableX = false;
            this.binDeplacableY = (this.intY + this.intHauteur / 2 + this.intMonter + intHauteur * 5) <= objMur.intYDebut
            break;
        case 88:
            if (binCollisionBrique) {
                lodeRunner.creuserAGauche()
                console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
            }
            break;
        case 90:
            if (binCollisionBrique) {
                lodeRunner.creuserADroite()
            }
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY && (!binCollisionBriqueD || !binCollisionBriqueG)) {
        this.intX += this.intVitesse * this.intDirection
    }

    if (this.binDeplacableY && !this.binDeplacableX && binCollisionEchelle || binCollisionEchelleNiveau) {
        if (this.intDirection == -1) {
            this.intY += this.intMonter * this.intDirection
        }
        else if (!binCollisionBrique && this.intDirection == 1) {
            this.intY += this.intMonter * this.intDirection
        }
    }

    // var posX = Math.floor(this.intX / intLargeur) - 1
    // var posY = Math.floor(this.intY / intHauteur) - 1


    if (binCompleteNiveau) {
        objSons.niveauComplete.play()
        this.intX = objCanvas.width / 2;
        this.intY = intHauteur * 16 - this.intHauteur / 2;
        intMsEcoulees = 0
        booStart = false
        intScore = (Number(intScore) + 1500).toString().padStart(7, '0')
        strNiveau = Number(strNiveau) + 1
        tabChar = []
        initTabChar(tabInitial)
        nbrLingotsRamasse = 0
        echelle.binAjoutEchelleNiveau = false
    }

    // console.log(binCollisionEchelle)
    // console.log(binCollisionBriqueD)


    lodeRunner.collision()
}

