function Garde(intHauteur, intLargeur, intPosX, intPosY) {
    this.intHauteur = intHauteur * 0.90;
    this.intLargeur = intLargeur * 0.65;
    this.intX = intPosX * intLargeur;
    this.intY = intHauteur * intPosY - this.intHauteur / 2;
    this.intTomber = 0.9; // constante 
    this.intMonter = 0.5; //constante - plus rapide que tomber
    this.intDirection = 1
    this.intVitesse = 1/2;
    this.binDeplacableXDroite = false;
    this.binDeplacableYBas = false;
    this.binDeplacableXGauche = false;
    this.binDeplacableYHaut = false;
    this.binMonter = false;
    this.binCourir = true;
    this.binTraverserCorde = false;
    this.intDessinerCourirGarde = 0;
    this.intDessinerEchelleGarde = 0;
    this.intDessinRalentirGarde = 0;
    this.intGaucheOUDroiteGarde  = 0;
    this.strDirection = 'droite';

    this.binCollisionEchelleG = false
    this.binCollisionLingotG = false
    this.binCollisionCordeG = false
    this.binCollisionBriqueG = false
    this.binCollisionBriqueGGarde = false;
    this.binCollisionBriqueDGarde = false;
    this.binCollisionVideG = false
    this.binCollisionLode = false
    this.binLaisserTomberG = false;

    this.binMonterEchelle = false;
    this.binDescendreEchelle = false;
}



Garde.prototype.dessinerGarde = function (objC2D) {
    objC2D.save();
    objC2D.translate(this.intX, this.intY)
    objC2D.scale(intLargeur, intHauteur);
    objC2D.beginPath();

    if (this.intGaucheOUDroiteGarde == 0) {
        objC2D.scale(1, 1);
    }
    else {
        objC2D.scale(-1, 1);
    }


    if (this.binCollisionBriqueG && this.binCourir) { // et s'il est sur une brique
        gardeAnimationCourir[this.intDessinerCourirGarde]('');
    }
    else if (this.binCollisionEchelleG) {  // et s'il est sur une échelle 
        gardeAnimationMonter[this.intDessinerEchelleGarde]('');
    }
    else if (this.binCollisionCordeG) { // et s'il est sur une corde
        dessinerGardeCorde();
    }
    else {
        dessinerGardeN();
    }
    objC2D.restore();
}

Garde.prototype.mettreAJourGarde = function() {
    this.intDessinRalentirGarde++;

    //Courir sur les briques
    if (this.intDessinRalentirGarde >=10 && this.binCollisionBriqueG) {
        // console.log('7')
        this.intDessinRalentirGarde = 0
        this.intDessinerCourirGarde = (this.intDessinerCourirGarde < gardeAnimationCourir.length -1) ? this.intDessinerCourirGarde+1 : 0;
    }
    
    //Monter les escaliers
    if (this.intDessinRalentirGarde >=15 && this.binCollisionEchelleG) {
        this.intDessinRalentirGarde = 0
        this.intDessinerEchelleGarde = (this.intDessinerEchelleGarde < gardeAnimationMonter.length -1) ? this.intDessinerEchelleGarde+1 : 0;
    }
    
    for (let i = 0; i < tabObjGardes.length; i++) {
        tabObjGardes[i].gestionCollisions(objC2D); 
      }
}

Garde.prototype.collision = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    //En contact avec un lingot
    this.binCollisionLingotG = tabChar[posY][posX] == '2'

    // binCollisionCorde = tabChar[posY][posX] == '4'
    this.binCollisionBriqueG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';

    //Faire tomber lorsque le runner est dans le vide
    this.binCollisionVideG = tabChar[posY][posX] == '.' && !this.binCollisionEchelleG && !this.binCollisionBriqueG && !this.binCollisionLingotG

    // if (binCollisionVideG) {
    //     binCollisionEchelleG = Math.abs(this.intY - this.intHauteur / 2 - intHauteur) < Math.floor(this.intY / intHauteur) * intHauteur &&
    //         this.intY > Math.floor(this.intY / intHauteur) * intHauteur
    // }
    // else {
    //     binCollisionEchelleG = tabChar[posY][posX] == '3' &&
    //     Math.abs(this.intX - this.intLargeur / 2 - intLargeur) < Math.floor(this.intX / intLargeur) * intLargeur &&
    //     this.intX > Math.floor(this.intX / intLargeur) * intLargeur    
    // }

    // console.log('echelle: ' + binCollisionEchelle + '\n' + 'lingot: ' + binCollisionLingot + '\n'
    //     + 'corde: ' + binCollisionCorde + '\n' + 'brique: ' + binCollisionBrique + '\n' + 'vide: ' + binCollisionVide + '\n' +
    //     'niveau complet: ' + binCompleteNiveau)
}

Garde.prototype.gestionCollisions = function () {
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1

    var objMur = tabObjMurs[0];
    var objMur2 = tabObjMurs[2];

    this.binDeplacableX = (this.intX + this.intLargeur / 2 + this.intVitesse) <= objMur.intXFin
    && (this.intX - this.intLargeur / 2 - this.intVitesse) >= objMur2.intXFin


    // console.log((this.intY / intHauteur) % 1)
    this.binCollisionBriqueG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '1';
    
    this.binCollisionVideG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '.' 
    || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '2'
        || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '4';

    this.binCollisionCordeG = tabChar[Math.floor((this.intY) / intHauteur) - 1][posX] == '4' && (this.intY / intHauteur) % 1 > 0.3 
        && (this.intY / intHauteur) % 1 < 0.65 && !this.binCollisionBriqueG && (tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] != '3');

    this.binCollisionEchelleG = tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 2][posX] == '3' 
        || tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '3';
    
   //Collisions briques (gauche et droite) 
    this.binCollisionBriqueDGarde = tabChar[posY][posX+1] == '1'|| (tabChar[posY+1][posX+1] == '1' && (this.intY / intHauteur) % 1 >= 0.585)
    
    this.binCollisionBriqueGGarde = tabChar[posY][posX-1] == '1'|| (tabChar[posY+1][posX-1] == '1' && (this.intY / intHauteur) % 1 >= 0.585)
        // || tabChar[posY][Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1] == '1'
    
    // console.log(binCollisionBriqueGGarde)
    // console.log("Y : " + posY + " X : " + (Math.floor((this.intX - this.intLargeur/2) / intLargeur) - 1))

    //Créer une collision pour les côtés
    if (this.binCollisionVideG && (!this.binCollisionCordeG || this.binLaisserTomberG)) {
        this.intY += this.intTomber
    }
    else {
        this.binLaisserTomberG = false;
    }
    
    if (this.binCollisionCordeG || this.binCollisionBriqueG) {
        this.binCollisionVideG = false;

    }

    // if (binCollisionEchelleG) {

    // }

    // if (binCollisionBriqueG) {

    // }

    for (let i = 0; i < tabObjGardes.length; i++) {
        tabObjGardes[i].deplacement(objC2D); 
      }
}

Garde.prototype.deplacement = function() {
    const echelleOuMarcher = ['echelle', 'marcher']
    strChoix = echelleOuMarcher[Math.floor(Math.random() * echelleOuMarcher.length)] 
    var posX = Math.floor(this.intX / intLargeur) - 1
    var posY = Math.floor(this.intY / intHauteur) - 1
    var objMur = tabObjMurs[0];
    var objMur1 = tabObjMurs[1];
    var objMur2 = tabObjMurs[2];
    var objMur3 = tabObjMurs[3];
    var binEnHautEchelle = (tabChar[posY][posX] == '.' || tabChar[posY][posX] == '4')  && (tabChar[posY+1][posX] == '3') 
        && (this.intY / intHauteur) % 1 > 0.54 && (this.intY / intHauteur) % 1 < 0.6
    // console.log(binEnHautEchelle)
    this.binDeplacableXGauche = (this.intX - this.intLargeur / 2 - this.intVitesse) >= objMur.intXFin
    this.binDeplacableXDroite = (this.intX + this.intLargeur / 2 + this.intVitesse) <= objMur2.intXFin

    this.binDeplacableYHaut = (this.intY - this.intHauteur / 2 - this.intMonter) >= objMur1.intYFin
    this.binDeplacableYBas = (this.intY + this.intHauteur / 2 + this.intMonter + intHauteur * 5) <= objMur3.intYDebut


    if(binStart) {
        if (this.binDeplacableXDroite && !this.binCollisionBriqueDGarde && !this.binCollisionBriqueGGarde && !this.binCollisionEchelleG && this.binCollisionVide) {
            this.intX += this.intVitesse * this.intDirection
        }
        
        if (this.strDirection == 'droite') {
            this.intGaucheOUDroiteGarde = 0;
    
            if (this.binCollisionBriqueG && this.binCollisionEchelleG) {
                this.intX += (this.intVitesse*8)
            }

            if (this.binCollisionEchelleG && !binEnHautEchelle && this.binDeplacableYHaut) {
                if (posY == 9 && posX == 2) {
                    this.intX += (this.intVitesse)
                }
                else {
    
                    this.intY -= this.intMonter
                }
            }
    
            if ((binEnHautEchelle || this.binCollisionBriqueG || this.binCollisionCordeG) && this.binDeplacableXDroite ) {
                this.intX += this.intVitesse
            }
            
            if (!this.binDeplacableXDroite) {
                this.strDirection = 'gauche'
            }
    
        }
    
    
        //créer une valeur un Math.random pour choisir entre descendre l'échelle ou bien continuer tout droit
        //Créer une valeur un Math.random pour choisir entre monter l'échelle ou bien continuer tout droit
    
        if (this.strDirection == 'gauche') {
            this.intGaucheOUDroiteGarde = -1;
    
            if ((binEnHautEchelle)  && this.binDeplacableXGauche) {
                this.intX -= this.intVitesse
                // this.intX -= this.intVitesse
            }
            if (this.binCollisionCordeG || this.binCollisionBriqueG) {
                this.intX -= this.intVitesse
                // this.intX -= this.intVitesse
            }
            if ((binEnHautEchelle || this.binCollisionEchelleG) && !this.binCollisionBriqueG) {
                if (posY == 3) {
                    this.intX -= this.intVitesse
                }
                else {
                    this.intY += this.intMonter
                }
            }
            if (!this.binDeplacableXGauche) {
                this.strDirection = 'droite'
            }
    
        }
    }
    // console.log(this.intX + "         " + (this.intVitesse) )

    

    // if (binCollisionBriqueG || (tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '3' 
    // && tabChar[posY][posX] == '.' ) && this.binDeplacableX) {
    //         this.intX += this.intVitesse * this.intDirection
    //     // else {
    //     //     this.intX += this.intVitesse * this.intDirection
    //     // }
    // }

    // if (tabChar[Math.floor((this.intY + this.intHauteur/2) / intHauteur) - 1][posX] == '3' 
    // && tabChar[posY][posX] == '.' ) {
    //     console.log(2)
    //     this.intX -= this.intVitesse * this.intDirection
    // }






    for (let i = 0; i < tabObjGardes.length; i++) {
        tabObjGardes[i].collision(objC2D); 
    }
}