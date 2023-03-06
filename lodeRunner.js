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
    this.intVitesse = 6;
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
    else if (binCollisionEchelle || binCollisionEchelleNiveau) {  // et s'il est sur une échelle 
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

    objLodeRunner.gestionCollisions();
}

Runner.prototype.gererImmobilite = function () {
    this.binCourir = false;

    if (!binCollisionEchelle) {

    }
}

var binCollisionGarde = false;
var binCollisionEchelle = false
var binCollisionEchelleNiveau = false
var binCollisionLingot = false
var binCollisionCorde = false
var binCollisionBrique = false
var binCollisionLodeBriqueG = false;
var binCollisionLodeBriqueD = false;
var binCollisionVide = false
var binCollisionGarde = false
var nbrLingotsRamasse = 0
var binCompleteNiveau = false
var binLaisserTomber = false;

Runner.prototype.collision = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    binCollisionEchelleNiveau = tabChar[posY][posX] == '6' &&
        Math.abs(this.intX - this.intLargeur / 2 - intLargeur) < Math.floor(this.intX / intLargeur) * intLargeur &&
        this.intX > Math.floor(this.intX / intLargeur) * intLargeur

    //En contact avec un lingot
    binCollisionLingot = tabChar[posY][posX] == '2'
    if (binCollisionLingot) {
        nbrLingotsRamasse++
        objSons.ramasseLingot.play()
        tabChar[posY][posX] = '.'
        strScore = (Number(strScore) + 250).toString().padStart(7, '0')
    }


    //Dessiner l'echelle de niveau lorsque le runner ramasse tout les lingots
    if (nbrLingotsRamasse == 6) {
        objEchelle.binAjoutEchelleNiveau = true
        binAjoutEchelleNiveau = true
    }

    binCollisionBrique = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';

    //Faire tomber lorsque le runner est dans le vide
    binCollisionVide = tabChar[posY][posX] == '.' && !binCollisionEchelle && !binCollisionBrique && !binCollisionLingot

    //Manipuler lorsqu'il atteint l'echelle de niveau
    var objMur = tabObjMurs[1];
    binCompleteNiveau = tabChar[posY][posX] == '6' && Math.abs(this.intY - this.intHauteur / 2 - intHauteur) <= objMur.intYFin

}

let tabPositionsCreuser = new Array()


Runner.prototype.creuserAGauche = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    objBrique.objDateHeure_1 = Date.now()

    if (tabChar[posY + 1][posX + 1] == '1') {
        tabChar[posY + 1][posX + 1] = '.'
        objSons.creuseTrou.play()
        //Ajouter les positions des trous
        tabPositionsCreuser.push((posX + 1) + " " + (posY + 1))
        // console.log(posX + 1 + " " + (posY + 1))

        for (var i = 0; i < tabObjBriques.length; i++) {
            if (tabObjBriques[i].intPositionXCreuser == (posX +1) 
            && tabObjBriques[i].intPositionYCreuser == (posY +1)  ) {
                tabObjBriques[i].binTroue = true;
                tabObjBriques[i].objDateHeure_1 = Date.now();

                // console.log(tabObjBriques[i].binTroue + "        " + tabObjBriques[i].objDateHeure_1 );
            }
        }
    }
}

Runner.prototype.creuserADroite = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    objBrique.objDateHeure_1 = Date.now()

    if (tabChar[posY + 1][posX - 1] == '1') {
        tabChar[posY + 1][posX - 1] = '.'
        objSons.creuseTrou.play()
        //Ajouter les positions des trous
        tabPositionsCreuser.push((posX - 1) + " " + (posY + 1))
        // console.log(posX - 1 + " " + (posY + 1))


        for (var i = 0; i < tabObjBriques.length; i++) {
            if (tabObjBriques[i].intPositionXCreuser == (posX +1) 
            && tabObjBriques[i].intPositionYCreuser == (posY +1)  ) {
                tabObjBriques[i].binTroue = true;
                tabObjBriques[i].objDateHeure_1 = Date.now();
                // console.log(tabObjBriques[i].binTroue + "        " + tabObjBriques[i].objDateHeure_1);
            }
        }
    }
}


Runner.prototype.gestionCollisions = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1
    
    binCollisionVide = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '.' 
    || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '2'
        || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '4';

    binCollisionCorde = tabChar[Math.floor((this.intY) / intHauteur) - 1][posX] == '4' && (this.intY / intHauteur) % 1 > 0.3 
        && (this.intY / intHauteur) % 1 < 0.65 && !binCollisionBrique && (tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] != '3');

    binCollisionEchelle = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 2][posX] == '3' 
    || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '3';
   //Collisions briques (gauche et droite) 
   
    binCollisionLodeBriqueD = (tabChar[posY][posX+1] == '1'|| (tabChar[posY+1][posX+1] == '1') && (this.intY / intHauteur) % 1 > 0.62)
    && (this.intX / intLargeur) % 1 >= 0.4
    
    binCollisionLodeBriqueG = (tabChar[posY][posX-1] == '1'|| (tabChar[posY+1][posX-1] == '1') && (this.intY / intHauteur) % 1 > 0.62)  
    && (this.intX / intLargeur) % 1 <= 0.4


    for (var i = 0; i < tabObjGardes.length; i++) {
        var posGardeX = Math.floor(tabObjGardes[i].intX/ intLargeur) - 1
        var posGardeY = Math.floor(tabObjGardes[i].intY / intHauteur) - 1
        if (posGardeX == posX && posGardeY == posY) {
            this.binCollisionGarde = true;
            break;
        }
    }
   
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


    if (this.binCollisionGarde) {
        // this.binCollisionGarde = true;
        binStart = false;
    }

    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1
    // console.log((this.binCollisionGarde && !binStart))

    if (this.binCollisionGarde && !binStart) {
        for (var i = 0; i < 5; i++) {
            if (i <= posY+1) {
                this.intY -= (i);
            }
        }


    }

}


Runner.prototype.gererDeplacementRunner = function () {
    
    if (!binStart) {
        binStart = true
    } 
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
                // console.log(this.binDeplacableX)
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
                objLodeRunner.creuserAGauche()
            }
            break;
        case 90:
            if (binCollisionBrique) {
                objLodeRunner.creuserADroite()
            }
            break;
    }

    if (this.binDeplacableX && !this.binDeplacableY && !binCollisionVide) {

        if (binCollisionLodeBriqueG && this.intDirection == 1) {
            this.intX += this.intVitesse * this.intDirection
        }
        if (binCollisionLodeBriqueD && this.intDirection == -1) {
            // console.log(this.intDirection)
            this.intX += this.intVitesse * this.intDirection
        }
        if (!binCollisionLodeBriqueG && !binCollisionLodeBriqueD) {
            this.intX += this.intVitesse * this.intDirection

        }
        
    }

    if (this.binDeplacableY && !this.binDeplacableX && binCollisionEchelle || binCollisionEchelleNiveau) {
        if (this.intDirection == -1) {
            this.intY += this.intMonter * this.intDirection
        }
        else if (!binCollisionBrique && this.intDirection == 1) {
            this.intY += this.intMonter * this.intDirection
        }
    }

    if (binCollisionGarde) {
        objSons.runnerMeurt.play();
    }

    if (binCompleteNiveau) {
        objSons.niveauComplete.play()
        this.intX = objCanvas.width / 2;
        this.intY = intHauteur * 16 - this.intHauteur / 2;
        intMsEcoulees = 0
        binStart = false
        strScore = (Number(strScore) + 1500).toString().padStart(7, '0')
        strNiveau = (Number(strNiveau) + 1).toString();
        tabChar = []
        initTabChar(tabInitial)
        nbrLingotsRamasse = 0
        objEchelle.binAjoutEchelleNiveau = false
        binAjoutEchelleNiveau = false

        tabObjGardes = [];
        switch(strNiveau) {
            case '2':
            console.log(strNiveau)
            tabObjGardes = [new Garde(intHauteur, intLargeur, 20, 16, 'droite'), new Garde(intHauteur, intLargeur, 5, 8, 'gauche'), 
            new Garde(intHauteur, intLargeur, 5, 14, 'droite'), new Garde(intHauteur, intLargeur, 24, 14, 'gauche')];
          break;
          case '3':
            tabObjGardes = [new Garde(intHauteur, intLargeur, 20, 16, 'droite'), new Garde(intHauteur, intLargeur, 5, 8, 'gauche'), 
            new Garde(intHauteur, intLargeur, 5, 14, 'droite'), new Garde(intHauteur, intLargeur, 8, 11, 'gauche')];
          break;
          case '4':
            tabObjGardes = [new Garde(intHauteur, intLargeur, 20, 16, 'droite'), new Garde(intHauteur, intLargeur, 5, 8, 'gauche'), 
            new Garde(intHauteur, intLargeur, 5, 14, 'droite'), new Garde(intHauteur, intLargeur, 24, 14, 'gauche')];
          break;
          case '5':
            tabObjGardes = [new Garde(intHauteur, intLargeur, 20, 16, 'droite'), new Garde(intHauteur, intLargeur, 5, 8, 'gauche'), 
            new Garde(intHauteur, intLargeur, 5, 14, 'droite'), new Garde(intHauteur, intLargeur, 24, 14, 'gauche')];
          break;
        }
    }

    // console.log(binAjoutEchelleNiveau)
    objLodeRunner.collision()
}

