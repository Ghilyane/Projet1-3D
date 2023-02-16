// function Lingot(){

//     let objLingot = new Object()
//     objLingot.X = 0
//     objLingot.Y = 0
//     objLingot.intLargeur = 5
//     objLingot.intHauteur = 3 
//     objLingot.binRamasser = false

//     return objLingot
// }



function Lingot(intHauteur, intLargeur) {
    this.intHauteur = intHauteur;
    this.intLargeur = intLargeur;
}

function initLingot(objImgLingot) {
    objImgLingot = new Image();
    objImgLingot.src = './Images/gold.jpg';
}


Lingot.prototype.dessinerLingot = function (objC2D) {
    objC2D.save();

    var tabElements = creerTabChar(tabInitial);
    this.intHauteur = objCanvas.height / 17;
    this.intLargeur = objCanvas.width / 28;
    
    for (var i = 0; i < tabElements.length; i++) {
        for (var j = 0; j < tabElements[0].length; j++) {
            if (tabElements[i][j] == "2") {
                // console.log(2) 
                // console.log(typeof objImgLingot);
                objC2D.drawImage(imgLingot, j * this.intLargeur, i * this.intHauteur, objCanvas.width / 28, objCanvas.height / 17);
            }
        }
    }

    objC2D.restore();
}

//créer une pièce qui tourne (un peu comme le yin-yang)
//remplacer par des 1$ ou 2$