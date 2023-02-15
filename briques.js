function Brique() {
    var brique = new Object();
    brique.intHauteur = 30;
    brique.intLargeur = 40;
    brique.imgMotif = new Image();
    brique.imgMotif.src = 'brique.png';
    brique.binTroue = false;

    return brique;
}

Brique.prototype.dessinerBrique = function(objC2D, tabObjBriques) {
    objC2D.save();

    brique.imgMotif.onload = function() {
        
        for (var i = 0; i < tabObjBriques.length; i++) {
            for (var j = 0; j < tabObjBriques[0].length; j++) {
                console.log(tabObjBriques[i][j]);
                
                if (tabObjBriques == "1") {
                    
                    const pattern = objC2D.createPattern(brique.imgMotif, "repeat");
                    objC2D.fillStyle = pattern;

                    objC2D.drawImage(brique.imgMotif, i*30, j*40);
                    objC2D.fill();
                }
            }
        }
    }

    objc2D.restore();
}