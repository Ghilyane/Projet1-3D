var intDessinerCourirGarde = 0;
var intDessinerEchelleGarde = 0;
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
    this.intVitesse = 2;
    this.binDeplacableX = false;
    this.binDeplacableY = false;
    this.binMonter = false;
    this.binCourir = true;
    this.binTraverserCorde = false;
}


var binCollisionEchelleG = false
var binCollisionLingotG = false
var binCollisionCordeG = false
var binCollisionBriqueG = false
var binCollisionBriqueGGarde = false;
var binCollisionBriqueDGarde = false;
var binCollisionVideG = false
var binCollisionLode = false
var binLaisserTomberG = false;

Garde.prototype.dessinerGarde = function (objC2D) {
    objC2D.save();
    objC2D.translate(this.intX, this.intY)
    objC2D.scale(intLargeur, intHauteur);
    objC2D.beginPath();

    // if (intGaucheOUDroite == 0) {
    //     objC2D.scale(1, 1);
    // }
    // else {
    //     objC2D.scale(-1, 1);
    // }


    if (binCollisionBriqueG && this.binCourir) { // et s'il est sur une brique
        gardeAnimationCourir[intDessinerCourirGarde]('');
    }
    else if (binCollisionEchelleG) {  // et s'il est sur une échelle 
        gardeAnimationMonter[intDessinerEchelleGarde]('');
    }
    else if (binCollisionCordeG) { // et s'il est sur une corde
        dessinerGardeCorde();
    }
    else {
        dessinerGardeN();
    }


    // objC2D.fillStyle = 'blue';
    // objC2D.font = objCanvas.width / 1000 + 'pt Arial'

    // objC2D.fillText(Math.floor(this.intX / intLargeur) - 1 + ', ' + (Math.floor(this.intY / intHauteur) - 1), -this.intLargeur / intLargeur / 2, -this.intHauteur / intHauteur / 2)
    objC2D.restore();
}

Garde.prototype.mettreAJourGarde = function() {
    intDessinRalentirGarde++;

    //Courir sur les briques
    if (intDessinRalentirGarde >=10 && binCollisionBriqueG) {
        intDessinRalentirGarde = 0
        intDessinerCourirGarde = (intDessinerCourirGarde < gardeAnimationCourir.length -1) ? intDessinerCourirGarde+1 : 0;
    }

    //Monter les escaliers
    if (intDessinRalentirGarde >=15 && binCollisionEchelleG) {
        intDessinRalentirGarde = 0
        intDessinerEchelleGarde = (intDessinerEchelleGarde < gardeAnimationMonter.length -1) ? intDessinerEchelleGarde+1 : 0;
    }

    garde.gestionCollisions();
}

Garde.prototype.collision = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    //En contact avec un lingot
    binCollisionLingotG = tabChar[posY][posX] == '2'

    // binCollisionCorde = tabChar[posY][posX] == '4'
    binCollisionBriqueG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';

    //Faire tomber lorsque le runner est dans le vide
    binCollisionVideG = tabChar[posY][posX] == '.' && !binCollisionEchelle && !binCollisionBrique && !binCollisionLingot

    if (binCollisionVideG) {
        binCollisionEchelleG = Math.abs(this.intY - this.intHauteur / 2 - intHauteur) < Math.floor(this.intY / intHauteur) * intHauteur &&
            this.intY > Math.floor(this.intY / intHauteur) * intHauteur
    }
    else {
        binCollisionEchelleG = tabChar[posY][posX] == '3' &&
        Math.abs(this.intX - this.intLargeur / 2 - intLargeur) < Math.floor(this.intX / intLargeur) * intLargeur &&
        this.intX > Math.floor(this.intX / intLargeur) * intLargeur    
    }

    // console.log('echelle: ' + binCollisionEchelle + '\n' + 'lingot: ' + binCollisionLingot + '\n'
    //     + 'corde: ' + binCollisionCorde + '\n' + 'brique: ' + binCollisionBrique + '\n' + 'vide: ' + binCollisionVide + '\n' +
    //     'niveau complet: ' + binCompleteNiveau)
}

Garde.prototype.gestionCollisions = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    // console.log((this.intY / intHauteur) % 1)
    binCollisionBriqueG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';
    
    binCollisionVideG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '.' 
    || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '2'
        || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '4';

    binCollisionCordeG = tabChar[Math.floor((this.intY) / intHauteur) - 1][posX] == '4' && (this.intY / intHauteur) % 1 > 0.3 
        && (this.intY / intHauteur) % 1 < 0.65 && !binCollisionBriqueG && (tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] != '3');

        
   //Collisions briques (gauche et droite) 
    binCollisionBriqueDGarde = tabChar[posY][Math.floor((this.intX + this.intLargeur/2) / intLargeur) + 1] == '1' 
        && tabChar[posY][Math.floor((this.intX + this.intLargeur/2) / intLargeur) + 1] == '1' 
    
    binCollisionBriqueGGarde = tabChar[posY][Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1] == '1'
        // || tabChar[posY][Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1] == '1'
    
    // console.log(binCollisionBriqueGGarde)
    // console.log("Y : " + posY + " X : " + (Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1))

    //Créer une collision pour les côtés
    if (binCollisionVideG && (!binCollisionCordeG || binLaisserTomberG)) {
        this.intY += this.intTomber
    }
    else {
        binLaisserTomberG = false;
    }
    
    if (binCollisionCordeG || binCollisionBriqueG) {
        binCollisionVideG = false;

    }

    if (binCollisionEchelleG) {

    }

    if (binCollisionBriqueG) {

    }

    garde.deplacement();
}

Garde.prototype.deplacement = function() {
    if (binCollisionEchelleG && binCollisionBriqueG) {
        this.intY += this.intVitesse * this.intDirection
    }
    console.log(binCollisionEchelleG)
    
    if (binCollisionBriqueG) {
        this.intX += this.intVitesse * this.intDirection
    }
}