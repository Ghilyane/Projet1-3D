function Runner(intHauteur, intLargeur){
   this.intHauteur = intHauteur
   this.intLargeur = intLargeur
}

Runner.prototype.dessinerLodeRunner = function(objC2D){
    objC2D.save()

    this.intHauteur = 10
    this.intLargeur = 10

    objC2D.fillRect(0, 0, this.intHauteur, this.intLargeur)
    objC2D.restore()
}

