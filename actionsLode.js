function dessinerLodeR() {
    //BASEEEEE

    objC2D.save();
    //La forme de la tête
    objC2D.beginPath();

    objC2D.ellipse(-0.25,-0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,-0.21, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,-0.07, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.07, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.21, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    
    // objC2D.globalCompositeOperation="destination-over";
    
    objC2D.beginPath();
    //Tête
    objC2D.fillStyle = "black";
    objC2D.ellipse(0,-0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    //cou
    // objC2D.fillStyle = "red";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)
    //épaules
    // objC2D.fillStyle = "green";
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();
    //Haut du torse
    objC2D.beginPath();
    objC2D.moveTo(-0.1,-0.22);
    objC2D.lineTo(0.1,-0.22);
    objC2D.lineTo(0.08, -0.1);
    objC2D.lineTo(-0.08, -0.1);
    objC2D.fill();

    //Bas du torse
    objC2D.beginPath();
    objC2D.moveTo(0.08, -0.1);
    objC2D.lineTo(-0.08, -0.1);
    objC2D.lineTo(-0.085, 0.015);
    objC2D.lineTo(0.085,0.015);
    objC2D.fill();

    //Jambe gauche
    // objC2D.lineCap = "round";
    objC2D.lineWidth = "0.001"
    objC2D.beginPath();
    objC2D.moveTo(-0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(-0.009, 0.15);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.fill();
    objC2D.stroke();

    //Genou gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.009, 0.15);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.lineTo(-0.06, 0.35)
    objC2D.lineTo(-0.02,0.35)
    objC2D.fill();

    //Jambe droite
    objC2D.beginPath();
    objC2D.moveTo(0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.fill();
    objC2D.stroke();

    //Genou droit
    objC2D.beginPath();
    objC2D.moveTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.lineTo(0.06, 0.35)
    objC2D.lineTo(0.02,0.35)
    objC2D.fill();


    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(-0.06,0.35, 0.04, 0.02,0, 0, 2*Math.PI, true );
    objC2D.fill();

    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.06,0.35, 0.04, 0.02,0, 0, 2*Math.PI, true );
    objC2D.fill();

    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.12, -0.08, 0.03, 0.15, 11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.12, -0.08, 0.03, 0.15, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.restore();
}
function dessinerLodeR1() {
    objC2D.save();
    //La forme de la tête
    objC2D.beginPath();

    objC2D.ellipse(-0.25,-0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,-0.21, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,-0.07, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.07, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.21, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    // objC2D.globalCompositeOperation="destination-over";
    
    objC2D.beginPath();
    //Tête
    objC2D.fillStyle = "black";
    objC2D.ellipse(0,-0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    //cou
    // objC2D.fillStyle = "red";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)
    //épaules
    // objC2D.fillStyle = "green";
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();
    //Haut du torse
    objC2D.beginPath();
    objC2D.moveTo(-0.1,-0.22);
    objC2D.lineTo(0.1,-0.22);
    objC2D.lineTo(0.08, -0.1);
    objC2D.lineTo(-0.08, -0.1);
    objC2D.fill();

    //Bas du torse
    objC2D.beginPath();
    objC2D.moveTo(0.08, -0.1);
    objC2D.lineTo(-0.08, -0.1);
    objC2D.lineTo(-0.085, 0.015);
    objC2D.lineTo(0.085,0.015);
    objC2D.fill();

    //Fesses


    //Jambe gauche
    // objC2D.lineCap = "round";
    objC2D.lineWidth = "0.001"
    objC2D.beginPath();
    objC2D.moveTo(-0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(-0.009, 0.15);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.fill();
    objC2D.stroke();

    //Genou gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.009, 0.15);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.lineTo(-0.06, 0.35)
    objC2D.lineTo(-0.02,0.35)
    objC2D.fill();

    //Jambe droite
    objC2D.beginPath();
    objC2D.moveTo(0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.fill();
    objC2D.stroke();

    //Genou droit
    objC2D.beginPath();
    objC2D.moveTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.lineTo(0.06, 0.35)
    objC2D.lineTo(0.02,0.35)
    objC2D.fill();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(-0.06,0.35, 0.04, 0.02,0, 0, 2*Math.PI, true );
    objC2D.fill();

    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.06,0.35, 0.04, 0.02,0, 0, 2*Math.PI, true );
    objC2D.fill();

    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.12, -0.08, 0.03, 0.15, 11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.12, -0.08, 0.03, 0.15, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.restore();
}
function dessinerLodeR1() {
  objC2D.save();
    //La forme de la tête
    
    objC2D.beginPath();
    //Tête
    objC2D.fillStyle = "black";
    objC2D.ellipse(0, -0.35, 0.05, 0.07, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    // objC2D.ellipse(0,-0.35, 0.05, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    
    //cou
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)
    
    //épaules
    objC2D.beginPath();
    objC2D.ellipse(-0.04,-0.1, 0.055, 0.2, 15 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.ellipse(-0.16,0.19, 0.05, 0.15, 30 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.ellipse(-0.16,0.19, 0.05, 0.15, 30 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();

    // objC2D.moveTo(-0.105, -0.22);
    // objC2D.lineTo(0.105, -0.22);
    // objC2D.lineTo(0, -0.285);
    // objC2D.fill();
    //Haut du torse
    // objC2D.beginPath();
    // objC2D.moveTo(-0.1,-0.22);
    // objC2D.lineTo(0.1,-0.22);
    // objC2D.lineTo(0.08, -0.1);
    // objC2D.lineTo(-0.08, -0.1);
    // objC2D.fill();

    // //Bas du torse
    // objC2D.beginPath();
    // objC2D.moveTo(0.08, -0.1);
    // objC2D.lineTo(-0.08, -0.1);
    // objC2D.lineTo(-0.085, 0.015);
    // objC2D.lineTo(0.085,0.015);
    // objC2D.fill();

    //Jambe gauche
    // objC2D.lineCap = "round";
    objC2D.lineWidth = "0.001"
    objC2D.beginPath();
    objC2D.moveTo(-0.03, 0.01);
    objC2D.lineTo(0.08, 0.1);
    objC2D.lineTo(0.08, 0.2);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.fill();
    objC2D.stroke();

    // //Genou gauche
    // objC2D.beginPath();
    // objC2D.moveTo(-0.009, 0.15);
    // objC2D.lineTo(-0.08, 0.15);
    // objC2D.lineTo(-0.06, 0.35)
    // objC2D.lineTo(-0.02,0.35)
    // objC2D.fill();

    // //Jambe droite
    // objC2D.beginPath();
    // objC2D.moveTo(0.085, 0.015);
    // objC2D.lineTo(0, 0.015);
    // objC2D.lineTo(0.009, 0.15);
    // objC2D.lineTo(0.08, 0.15);
    // objC2D.fill();
    // objC2D.stroke();

    // //Genou droit
    // objC2D.beginPath();
    // objC2D.moveTo(0.009, 0.15);
    // objC2D.lineTo(0.08, 0.15);
    // objC2D.lineTo(0.06, 0.35)
    // objC2D.lineTo(0.02,0.35)
    // objC2D.fill();


    // //pied droit
    // objC2D.beginPath();
    // objC2D.ellipse(-0.06,0.35, 0.04, 0.02,0, 0, 2*Math.PI, true );
    // objC2D.fill();

    // //Pied gauche (ellipse)
    // objC2D.beginPath();
    // objC2D.ellipse(0.06,0.35, 0.04, 0.02,0, 0, 2*Math.PI, true );
    // objC2D.fill();

    // //Bras droit (ellipse)
    // objC2D.beginPath();
    // objC2D.ellipse(-0.12, -0.08, 0.03, 0.15, 11 * Math.PI/180, 0, 2 * Math.PI, true);
    // objC2D.fill();

    // //Bras gauche (ellipse)
    // objC2D.beginPath();
    // objC2D.ellipse(0.12, -0.08, 0.03, 0.15, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    // objC2D.fill();

    objC2D.restore();
}
function dessinerLodeR3() {
    objC2D.save();
    objC2D.arc(0,-0.3, 0.2, 0, 2*Math.PI, true );
    objC2D.fill();
    objC2D.restore();
}

/**
 *             l (-)
 *             l
 *             l
 (-)-----------l----------------> (+)
 *             l
 *             l
 *             l (+)
 */
//créer tableaux de fonctions