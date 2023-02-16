

var tabChar = [];

class JeuPrincipal {
    constructor(objC2D) {
        this.objC2D = objC2D;
        this.brique = new Brique();
    }
    
    mettreAjourTable() {
        tabObjets = new Array();
        
        for (var i = 0; i < tabInitial.length; i++) {
            tabChar.push(tabInitial[i].split(''))
        }
        
        for (var i = 0; i < tabChar.length; i++) {
            for (var j = 0; j < tabChar[0].length; j++) {
                console.log(tabChar[i][j]);
            }
        }
        return tabChar;
    }

    dessiner() {
        // this.objC2D.fillRect(0, 0,100,200);
        // this.brique = new Brique(objC2D)
        // this.brique.dessinerBrique();
    }
    
}
