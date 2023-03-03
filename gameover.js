let fltAngleRotation = 0
let intTimer = 0
let tempsEcoule_1 = 0
var objDateHeure1 = Date.now()
let binGameOver = false
function mettreAJourGameOver() {
    var objDateHeure2 = Date.now();

    fltAngleRotation += 1.6 * -Math.PI / 180;
    intTimer += objDateHeure2 - objDateHeure1
    tempsEcoule_1 = (intTimer % 60000) / 1000

    //Arret du spin apres 9 secs
    if (tempsEcoule_1 >= 9) {
        fltAngleRotation = 0
    }
    binGameOver = false
    if (intVie == 0) {
        binGameOver = true
    }

    objDateHeure1 = objDateHeure2;
}

function dessinerGameOver() {
    let strTexte = 'Game over'
    objC2D.save()
    objC2D.fillStyle = '#FFD700'
    objC2D.font = '120pt Impact'
    objC2D.textAlign = 'center'
    objC2D.translate(objCanvas.width / 2, objCanvas.height / 2)
    objC2D.rotate(fltAngleRotation)
    objC2D.fillText(strTexte, 0, 0)
    objC2D.strokeText(strTexte, 0, 0)
    objC2D.restore()
}