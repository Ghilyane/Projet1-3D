//Ici, que je dessine les différents objets


    function initCanvas (objC2D) {
        objC2D.beginPath();
        objC2D.fillStyle = 'black';
        objC2D.fillRect(0, 0, objCanvas.width, objCanvas.height);
        objC2D.closePath();
    }


    imgBrique = new Image();
    imgBrique.src = './Images/brique.png';

    imgBeton = new Image();
    imgBeton.src = './Images/béton.jpg';

    imgEchelle = new Image();
    imgEchelle.src = './Images/ladder2.png';

    imgLingot = new Image();
    imgLingot.src = './Images/gold.jpg';

    imgCorde = new Image();
    imgCorde.src = './Images/corde.png';

    function initTableau (objC2D) {
    //   index = objJeu.mettreAjourTable(tabInitial);
    var intHauteur = objCanvas.height / 17;
    objC2D.strokeStyle = 'white';
    for (var i = intHauteur; i < objCanvas.width; i += intHauteur) {
          console.log('1');
          objC2D.moveTo(0, i);
          objC2D.lineTo(objCanvas.width, i);
      }
  
      var intLargeur = objCanvas.width/28;
      for (var i = intLargeur; i < objCanvas.width; i+= intLargeur) {
          objC2D.moveTo(i, 0);
          objC2D.lineTo(i, objCanvas.height);
      }
      objC2D.stroke();

    } 


    // objJeu.dessiner();

    // const brique = new Brique();
    // brique.dessinerBrique();


