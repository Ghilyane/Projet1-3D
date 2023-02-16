function Runner(intHauteur, intLargeur) {
    this.intHauteur = intHauteur
    this.intLargeur = intLargeur
    this.intX = objCanvas.width / 2
    this.intY = (objCanvas.height / 17) * 14
    this.intDirection = 1
    this.intVitesse = 5
    this.binDeplacable = false
}

Runner.prototype.dessinerLodeRunner = function (objC2D) {
    objC2D.save()

    this.intHauteur = 25
    this.intLargeur = 25

    //pour le moment

    objC2D.fillStyle = 'white'
    objC2D.fillRect(this.intX, this.intY, this.intLargeur, this.intHauteur)
    objC2D.fill()
    objC2D.restore()
}

function gererDeplacementRunner() {
    switch (event.keyCode) {
        //37 - gauche
        //38 - haut
        //39 - droite
        //40 - bas
        
        case 37:
            this.intDirection = -1
            binDeplacable = (this.intX + this.intLargeur + this.intVitesse) >= objCanvas.width
            break
        case 39:
            this.intDirection = 1
            binDeplacable = (this.intX - this.intVitesse) <= objCanvas.width
            break
    }

    if (binDeplacable){
        this.intX += this.intVitesse * this.intDirection
    }

}

