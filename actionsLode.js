var lodeAnimationCourir = [
    dessinerLodeCourt1, dessinerLodeCourt2, dessinerLodeCourt3, 
    dessinerLodeCourt4, dessinerLodeCourt5, dessinerLodeCourt6
];

var lodeAnimationMonter = [
    dessinerLodeRMonte1, dessinerLodeRMonte2
]


function dessinerLodeR1() {
    //BASEEEEE
    
    objC2D.save();

    objC2D.translate(0.05, 0.075);

    //La forme de la tête
    objC2D.beginPath();
    objC2D.globalCompositeOperation="source-over";

    objC2D.ellipse(-0.25,-0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,-0.21, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,-0.07, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.07, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.21, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.ellipse(-0.25,0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    
    
    objC2D.beginPath();
    //Tête
    objC2D.fillStyle = "black";
    objC2D.ellipse(0,-0.35, 0.055, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();
    //cou
    objC2D.fillStyle = "red";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)
    //épaules
    objC2D.fillStyle = "green";
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
function dessinerLodeR() {
    objC2D.save();
    
    objC2D.translate(0, 0.075);

    //Jambe droite
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.moveTo(0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.fill();

    //Genou droit
    objC2D.beginPath();
    objC2D.moveTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.lineTo(0.06, 0.35)
    objC2D.lineTo(0.02,0.35)
    objC2D.fill();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(0.07,0.35, 0.05, 0.02,0, 0, 2*Math.PI, true );
    objC2D.fill();

    
    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.12, -0.08, 0.03, 0.15, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();
    
    
    //Fesses
    
    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.ellipse(-0.12, -0.08, 0.03, 0.15, 11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    //Jambe gauche
    objC2D.beginPath();
    objC2D.lineWidth = "0.001"
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

    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.07,0.35, 0.05, 0.02,0, 0, 2*Math.PI, true );
    objC2D.fill();

    //Haut du torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
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
    
    //épaules
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();

    //cou
    objC2D.fillStyle = "grey";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)

    //Tête
    objC2D.fillStyle = "red";
    objC2D.ellipse(0,-0.35, 0.05, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();

    objC2D.restore();

}

function dessinerLodeRTomber() {
    objC2D.save();
    
    objC2D.translate(0, 0.045);

    //Jambe droite
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.moveTo(0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.fill();

    //Genou droit
    objC2D.beginPath();
    objC2D.moveTo(0.009, 0.15);
    objC2D.lineTo(0.08, 0.15);
    objC2D.lineTo(0.06, 0.35)
    objC2D.lineTo(0.02,0.35)
    objC2D.fill();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(0.055 ,0.365, 0.05, 0.02, 45 *Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    
    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.12, -0.08, 0.03, 0.15, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();
    
    
    //Fesses
    
    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.ellipse(-0.12, -0.08, 0.03, 0.15, 11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    //Jambe gauche
    objC2D.beginPath();
    objC2D.lineWidth = "0.001"
    objC2D.moveTo(-0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(-0.009, 0.15);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.fill();
    // objC2D.stroke();

    //Genou gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.009, 0.15);
    objC2D.lineTo(-0.08, 0.15);
    objC2D.lineTo(-0.06, 0.35)
    objC2D.lineTo(-0.02,0.35)
    objC2D.fill();

    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.055 ,0.365, 0.05, 0.02, -45 *Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    //Haut du torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
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
    
    //épaules
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();

    //cou
    objC2D.fillStyle = "grey";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)

    //Tête
    objC2D.fillStyle = "red";
    objC2D.ellipse(0,-0.35, 0.05, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();

    objC2D.restore();

}

function dessinerLodeRCorde() {
    objC2D.save();
    
    objC2D.translate(0, 0.075);

    //La forme de la tête
    objC2D.beginPath();

    //Jambe droite
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.moveTo(0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(0.08, 0.1);
    objC2D.lineTo(0.15, 0.1);
    objC2D.fill();

    //Genou droit
    objC2D.beginPath();
    objC2D.moveTo(0.08, 0.1);
    objC2D.lineTo(0.15, 0.1);
    objC2D.lineTo(0.17, 0.27)
    objC2D.lineTo(0.11,0.27)
    objC2D.fill();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(0.16,0.27, 0.05, 0.02, -10 *Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    
    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.14, -0.19, 0.03, 0.1, -80 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.beginPath();
    objC2D.moveTo(0.24, -0.17);
    objC2D.lineTo(0.195, -0.17);
    objC2D.lineTo(0.21, -0.35);
    objC2D.lineTo(0.25, -0.35);
    objC2D.fill();
    
    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.14, -0.19, 0.03, 0.1, 80 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.beginPath();
    objC2D.moveTo(-0.24, -0.17);
    objC2D.lineTo(-0.195, -0.17);
    objC2D.lineTo(-0.21, -0.35);
    objC2D.lineTo(-0.25, -0.35);
    objC2D.fill();

    //Jambe gauche
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.moveTo(-0.085, 0.015);
    objC2D.lineTo(-0, 0.015);
    objC2D.lineTo(-0.08, 0.1);
    objC2D.lineTo(-0.15, 0.1);
    objC2D.fill();


    //Genou gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.08, 0.1);
    objC2D.lineTo(-0.15, 0.1);
    objC2D.lineTo(-0.17, 0.27)
    objC2D.lineTo(-0.11,0.27)
    objC2D.fill();


    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.16, 0.27, 0.05, 0.02, 10 *Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    //Haut du torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
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
    
    //épaules
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();

    //cou
    objC2D.fillStyle = "grey";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)

    //Tête
    objC2D.fillStyle = "red";
    objC2D.ellipse(0,-0.35, 0.05, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();

    objC2D.restore();
}

function dessinerLodeRMonte1() {
    objC2D.save();
    
    objC2D.translate(0, 0.075);

    //La forme de la tête
    objC2D.beginPath();

    //Jambe droite
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.moveTo(0.085, 0.015);
    objC2D.lineTo(0, 0.015);
    objC2D.lineTo(0.08, 0.1);
    objC2D.lineTo(0.15, 0.1);
    objC2D.fill();

    //Genou droit
    objC2D.beginPath();
    objC2D.moveTo(0.08, 0.1);
    objC2D.lineTo(0.15, 0.1);
    objC2D.lineTo(0.17, 0.27)
    objC2D.lineTo(0.11,0.27)
    objC2D.fill();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(0.16,0.27, 0.05, 0.02, -10 *Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    
    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(0.14, -0.19, 0.03, 0.1, -80 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.beginPath();
    objC2D.moveTo(0.24, -0.17);
    objC2D.lineTo(0.195, -0.17);
    objC2D.lineTo(0.21, -0.35);
    objC2D.lineTo(0.25, -0.35);
    objC2D.fill();
    
    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.ellipse(-0.12, -0.15, 0.03, 0.08, 30 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.beginPath();
    objC2D.moveTo(-0.165, -0.085);
    objC2D.lineTo(-0.145, -0.17);
    objC2D.lineTo(-0.16, -0.25);
    objC2D.lineTo(-0.2, -0.25);
    objC2D.fill();

    //Jambe gauche
    objC2D.beginPath();
    objC2D.lineWidth = "0.001"
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

    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.065,0.34, 0.05, 0.02, 20 * Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    //Haut du torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
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
    
    //épaules
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();

    //cou
    objC2D.fillStyle = "grey";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)

    //Tête
    objC2D.fillStyle = "red";
    objC2D.ellipse(0,-0.35, 0.05, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();

    objC2D.restore();
}

function dessinerLodeRMonte2() {
    objC2D.save();
    
    objC2D.translate(0, 0.075);

    //La forme de la tête
    objC2D.beginPath();

    //Jambe droite
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.lineWidth = "0.001"
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
    objC2D.ellipse(0.065,0.34, 0.05, 0.02, -20 * Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    
    //Bras droit (ellipse)
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.ellipse(0.12, -0.15, 0.03, 0.08, -30 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.beginPath();
    objC2D.moveTo(0.165, -0.085);
    objC2D.lineTo(0.145, -0.17);
    objC2D.lineTo(0.16, -0.25);
    objC2D.lineTo(0.2, -0.25);
    objC2D.fill();
    
    //Bras gauche (ellipse)
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.ellipse(-0.14, -0.19, 0.03, 0.1, 80 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();

    objC2D.beginPath();
    objC2D.moveTo(-0.24, -0.17);
    objC2D.lineTo(-0.195, -0.17);
    objC2D.lineTo(-0.21, -0.35);
    objC2D.lineTo(-0.25, -0.35);
    objC2D.fill();

    //Jambe gauche
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.moveTo(-0.085, 0.015);
    objC2D.lineTo(-0, 0.015);
    objC2D.lineTo(-0.08, 0.1);
    objC2D.lineTo(-0.15, 0.1);
    objC2D.fill();

    //Genou gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.08, 0.1);
    objC2D.lineTo(-0.15, 0.1);
    objC2D.lineTo(-0.17, 0.27)
    objC2D.lineTo(-0.11,0.27)
    objC2D.fill();

    //Pied gauche (ellipse)
    objC2D.beginPath();
    objC2D.ellipse(-0.16,0.27, 0.05, 0.02, 10 *Math.PI/180, 0, 2*Math.PI, true );
    objC2D.fill();

    

    //Haut du torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
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
    
    //épaules
    objC2D.moveTo(-0.105, -0.22);
    objC2D.lineTo(0.105, -0.22);
    objC2D.lineTo(0, -0.285);
    objC2D.fill();

    //cou
    objC2D.fillStyle = "grey";
    objC2D.beginPath();
    objC2D.fillRect(-0.024, -0.3, 0.048, 0.03)

    //Tête
    objC2D.fillStyle = "red";
    objC2D.ellipse(0,-0.35, 0.05, 0.07,0, 0, 2*Math.PI, true );
    objC2D.fill();

    objC2D.restore();
}

function dessinerLodeCourt1() {
    objC2D.save();
      //La forme de la tête
      objC2D.translate(0.065, 0.075);
      
      objC2D.globalCompositeOperation="source-over";    
  
      
      //Jambe gauche
      // objC2D.lineCap = "round";
      objC2D.lineWidth = "0.001"
      objC2D.beginPath();
      objC2D.fillStyle = "gold";
      objC2D.moveTo(-0.02, -0.005);
      objC2D.lineTo(-0.18, 0.17);
      objC2D.lineTo(-0.25, 0.16);
      objC2D.lineTo(-0.11, 0);
      objC2D.closePath();
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.ellipse(-0.255, 0.125, 0.029, 0.09, 120 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.ellipse(-0.34, 0.125, 0.055, 0.02, -75 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      //bras gauche
      objC2D.beginPath();
      objC2D.moveTo(0.035, -0.24);
      objC2D.lineTo(0.12, -0.13);
      objC2D.lineTo(0.2, -0.18);
      objC2D.lineTo(0.21, -0.14);
      objC2D.lineTo(0.11, -0.08);
      objC2D.lineTo(-0.01, -0.2);
      objC2D.fill();

      // torse
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.04,-0.1, 0.06, 0.19, 15 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      
      //jambe droite
      objC2D.beginPath()
      objC2D.fillStyle = "pink";
      objC2D.moveTo(-0.1, 0.03);
      objC2D.lineTo(-0.015, 0.013);
      objC2D.lineTo(0.095,0.19);
      objC2D.lineTo(0.18,0.35);
      objC2D.lineTo(0.11,0.36);
      objC2D.lineTo(0.04 ,0.2);
      objC2D.fill();
      
      //pied droit
      objC2D.beginPath();
      objC2D.ellipse(0.165,0.34, 0.022, 0.06, 60 * Math.PI/180, 0, 2 * Math.PI, true );
      // objC2D.ellipse(0.16,0.19, 0.05, 0.15, 30 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
      
      //postérieur
      objC2D.beginPath()
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.068,0.023, 0.05, 0.065, 10 * Math.PI/180, 0, 2 * Math.PI, true ); //changer pour moveTo/linwTo
      objC2D.fill();

      //cou
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.fillRect(-0.024, -0.3, 0.05, 0.03)
      
      //bras droit
      objC2D.beginPath();
      objC2D.srokeStyle = "black";
      objC2D.fillStyle = "pink";
      objC2D.ellipse(-0.085, -0.17, 0.03, 0.1, 70 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.moveTo(-0.12, -0.14);
      objC2D.lineTo(-0.18,-0.14);
      objC2D.lineTo(-0.2, 0);
      objC2D.lineTo(-0.16, 0);
      objC2D.fill();
     
      //Tête
      objC2D.beginPath();
      objC2D.fillStyle = "red";
      objC2D.ellipse(0, -0.36, 0.05, 0.07, -11 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      
      objC2D.restore();
}

function dessinerLodeCourt2() {
    objC2D.save();
      //La forme de la tête
      objC2D.translate(0.05, 0.075);
      
      objC2D.globalCompositeOperation="source-over";    
  
      
      //Jambe gauche
      // objC2D.lineCap = "round";
      objC2D.lineWidth = "0.001"
      objC2D.beginPath();
      objC2D.fillStyle = "gold";
      objC2D.moveTo(-0.02, -0.005);
      objC2D.lineTo(-0.1, 0.2);
      objC2D.lineTo(-0.17, 0.19);
      objC2D.lineTo(-0.12, 0.06);
      objC2D.closePath();
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.ellipse(-0.195, 0.18, 0.029, 0.1, -85 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.ellipse(-0.31, 0.2, 0.055, 0.02, -45 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      //bras gauche
      objC2D.beginPath();
      objC2D.moveTo(0.035, -0.24);
      objC2D.lineTo(0.1, -0.1);
      objC2D.lineTo(0.2, -0.12);
      objC2D.lineTo(0.2, -0.08);
      objC2D.lineTo(0.08, -0.05);
      objC2D.lineTo(-0.01, -0.2);
      objC2D.fill();

      // torse
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.04,-0.1, 0.06, 0.19, 15 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      
      //jambe droite
      objC2D.beginPath()
      objC2D.fillStyle = "pink";
      objC2D.moveTo(-0.12, 0.03);
      objC2D.lineTo(-0.025, 0.04);
      objC2D.lineTo(0.08,0.19);
      objC2D.lineTo(0.02,0.34);
      objC2D.lineTo(-0.03,0.345);
      objC2D.lineTo(0.01 ,0.2);
      objC2D.fill();
      
      //pied droit
      objC2D.beginPath();
      objC2D.ellipse(0.027,0.35, 0.022, 0.06, -90 * Math.PI/180, 0, 2 * Math.PI, true );
      // objC2D.ellipse(0.16,0.19, 0.05, 0.15, 30 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
      
      //postérieur
      objC2D.beginPath()
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.075,0.03, 0.048, 0.06, 10 * Math.PI/180, 0, 2 * Math.PI, true ); //changer pour moveTo/linwTo
      objC2D.fill();

      //cou
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.fillRect(-0.024, -0.3, 0.05, 0.03)
      
      //bras droit
      objC2D.beginPath();
      objC2D.srokeStyle = "black";
      objC2D.fillStyle = "pink";
      objC2D.ellipse(-0.07, -0.17, 0.03, 0.1, 60 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.moveTo(-0.1, -0.14);
      objC2D.lineTo(-0.16,-0.125);
      objC2D.lineTo(-0.2,0.015);
      objC2D.lineTo(-0.16, 0.04);
      objC2D.fill();
     
      //Tête
      objC2D.beginPath();
      objC2D.fillStyle = "red";
      objC2D.ellipse(0, -0.36, 0.05, 0.07, -11 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      
      objC2D.restore();
}

function dessinerLodeCourt3() {
    objC2D.save();
      //La forme de la tête
      objC2D.translate(0.05, 0.075);
      
      objC2D.globalCompositeOperation="source-over";    
  
      
      //Jambe gauche
      // objC2D.lineCap = "round";
      objC2D.lineWidth = "0.001"
      objC2D.beginPath();
      objC2D.fillStyle = "gold";
      objC2D.moveTo(-0.04, -0.005);
      objC2D.lineTo(0.11, 0.145);
      objC2D.lineTo(0.03, 0.15);
      objC2D.lineTo(-0.12, 0.06);
      objC2D.closePath();
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.ellipse(-0.007,0.185, 0.029, 0.12, 70 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.ellipse(-0.093,0.257, 0.055, 0.02, 70 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      //bras gauche
      objC2D.beginPath();
      objC2D.moveTo(-0.04, -0.24);
      objC2D.lineTo(-0.15, -0.12);
      objC2D.lineTo(-0.05, 0.01);
      objC2D.lineTo(-0.05, -0.06);
      objC2D.lineTo(-0.1, -0.11);
      objC2D.lineTo(-0.04, -0.2);
      objC2D.fill();
  
      // torse
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.04,-0.1, 0.06, 0.2, 15 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      
      //jambe droite
      objC2D.beginPath()
      objC2D.fillStyle = "pink";
      objC2D.moveTo(-0.12, 0.03);
      objC2D.lineTo(-0.025, 0.04);
      objC2D.lineTo(0.02,0.23);
      objC2D.lineTo(-0.09,0.34);
      objC2D.lineTo(-0.15,0.34);
      objC2D.lineTo(-0.05,0.2);
      objC2D.fill();
      
      //pied droit
      objC2D.beginPath();
      objC2D.ellipse(-0.095,0.35, 0.022, 0.06, -90 * Math.PI/180, 0, 2 * Math.PI, true );
      // objC2D.ellipse(0.16,0.19, 0.05, 0.15, 30 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
      
      //postérieur
      objC2D.beginPath()
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.075,0.03, 0.048, 0.06, 10 * Math.PI/180, 0, 2 * Math.PI, true ); //changer pour moveTo/linwTo
      objC2D.fill();

      //cou
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.fillRect(-0.024, -0.3, 0.05, 0.03)
      
      //bras droit
      objC2D.beginPath();
      objC2D.srokeStyle = "black";
      objC2D.fillStyle = "pink";
      objC2D.ellipse(0.03, -0.14, 0.03, 0.12, -2 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.moveTo(0.035, -0.02);
      objC2D.lineTo(0.04,-0.08);
      objC2D.lineTo(0.17,0.015);
      objC2D.lineTo(0.14, 0.04);
      objC2D.fill();
     
      //Tête
      objC2D.beginPath();
      objC2D.fillStyle = "red";
      objC2D.ellipse(0, -0.36, 0.05, 0.07, -11 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      
      objC2D.restore();
}
function dessinerLodeCourt4() {
    objC2D.save();
    //La forme de la tête
    objC2D.translate(0.05, 0.075);
    
    objC2D.globalCompositeOperation="source-over";    


    //Jambe gauche
    // objC2D.lineCap = "round";
    objC2D.lineWidth = "0.001"
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.moveTo(-0.03, -0.005);
    objC2D.lineTo(0.12, 0.07);
    objC2D.lineTo(0.1, 0.12);
    objC2D.lineTo(-0.12, 0.06);
    objC2D.closePath();
    objC2D.fill();
    objC2D.stroke();
    
    objC2D.beginPath();
    objC2D.ellipse(0.12,0.17, 0.025, 0.1, -5 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.ellipse(0.165,0.25, 0.05, 0.02, -10 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();

    //bras gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.04, -0.24);
    objC2D.lineTo(-0.18, -0.21);
    objC2D.lineTo(-0.23, -0.03);
    objC2D.lineTo(-0.19, -0.041);
    objC2D.lineTo(-0.14, -0.17);
    objC2D.lineTo(-0.03, -0.2);
    objC2D.fill();

    // torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
    objC2D.ellipse(-0.04,-0.1, 0.055, 0.2, 15 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();

    //postérieur
    objC2D.beginPath()
    objC2D.fillStyle = "grey";
    objC2D.ellipse(-0.11,0.06, 0.02, 0.06, 15 * Math.PI/180, 0, 2 * Math.PI, true ); //changer pour moveTo/linwTo
    objC2D.fill();

    //jambe droite
    objC2D.beginPath()
    objC2D.fillStyle = "pink";
    objC2D.moveTo(-0.12, 0.03);
    objC2D.lineTo(-0.045, 0.06);
    objC2D.lineTo(-0.1,0.21);
    objC2D.lineTo(-0.28,0.24);
    objC2D.lineTo(-0.28,0.19);
    objC2D.lineTo(-0.17,0.17);
    objC2D.fill();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(-0.26, 0.235, 0.022, 0.05, -25 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();
    
    //cou
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
    objC2D.fillRect(-0.024, -0.3, 0.05, 0.03)
    
    //bras droit
    objC2D.beginPath();
    objC2D.srokeStyle = "black";
    objC2D.fillStyle = "pink";
    objC2D.ellipse(0.03, -0.14, 0.03, 0.12, -25 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();
    objC2D.stroke();
    
    objC2D.beginPath();
    objC2D.moveTo(0.07, -0.0305);
    objC2D.lineTo(0.04,-0.08);
    objC2D.lineTo(0.17,-0.08);
    objC2D.lineTo(0.2,-0.06);
    objC2D.fill();
   
    //Tête
    objC2D.beginPath();
    objC2D.fillStyle = "red";
    objC2D.ellipse(0, -0.36, 0.05, 0.07, -11 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();
    
    objC2D.restore();
}
function dessinerLodeCourt5() {
    objC2D.save();
    //La forme de la tête
    objC2D.translate(0.05, 0.11);
    
    objC2D.globalCompositeOperation="source-over";    


    //Jambe gauche
    // objC2D.lineCap = "round";
    objC2D.lineWidth = "0.001"
    objC2D.beginPath();
    objC2D.fillStyle = "gold";
    objC2D.moveTo(-0.035, -0.03);
    objC2D.lineTo(0.07, 0.19);
    objC2D.lineTo(0.03, 0.2);
    objC2D.lineTo(-0.065, 0.05);
    objC2D.closePath();
    objC2D.fill();
    objC2D.stroke();
    
    objC2D.beginPath();
    objC2D.ellipse(0.07,0.24, 0.025, 0.1, -25 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.ellipse(0.15,0.305, 0.05, 0.02, -25 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();

    //bras gauche
    objC2D.beginPath();
    objC2D.moveTo(-0.04, -0.24);
    objC2D.lineTo(-0.18, -0.21);
    objC2D.lineTo(-0.23, -0.03);
    objC2D.lineTo(-0.19, -0.041);
    objC2D.lineTo(-0.14, -0.17);
    objC2D.lineTo(-0.03, -0.2);
    objC2D.fill();

    // torse
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
    objC2D.ellipse(-0.04,-0.1, 0.06, 0.2, 20 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();

    //postérieur
    objC2D.beginPath()
    objC2D.fillStyle = "grey";
    objC2D.ellipse(-0.11,0.06, 0.02, 0.06, 15 * Math.PI/180, 0, 2 * Math.PI, true ); //changer pour moveTo/linwTo
    objC2D.fill();

    //jambe droite
    objC2D.beginPath()
    objC2D.fillStyle = "pink";
    objC2D.moveTo(-0.13, 0.03);
    objC2D.lineTo(-0.06, 0.06);
    objC2D.lineTo(-0.12,0.22);
    objC2D.lineTo(-0.3,0.085);
    objC2D.lineTo(-0.29, 0.025);
    objC2D.lineTo(-0.15,0.15);
    objC2D.fill();
    objC2D.stroke();

    //pied droit
    objC2D.beginPath();
    objC2D.ellipse(-0.3, 0.08, 0.022, 0.055, 20 * Math.PI/180, 0, 2 * Math.PI, true );
    objC2D.fill();
    objC2D.stroke();
    
    //cou
    objC2D.beginPath();
    objC2D.fillStyle = "grey";
    objC2D.fillRect(-0.003, -0.295, 0.05, 0.03)
    
    //bras droit
    objC2D.beginPath();
    objC2D.fillStyle = "pink";
    objC2D.moveTo(0.16, -0.0495);
    objC2D.lineTo(0.13,-0.1);
    objC2D.lineTo(0.2,-0.2);
    objC2D.lineTo(0.25,-0.21);
    objC2D.fill();
    objC2D.stroke();
   
    objC2D.beginPath();
    objC2D.srokeStyle = "black";
    objC2D.ellipse(0.08, -0.14, 0.03, 0.12, -45 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();
    objC2D.stroke();
    
    //Tête
    objC2D.beginPath();
    objC2D.fillStyle = "red";
    objC2D.ellipse(0.038, -0.34, 0.05, 0.07, 15 * Math.PI/180, 0, 2 * Math.PI, true);
    objC2D.fill();
    
    objC2D.restore();
}

function dessinerLodeCourt6() {
    objC2D.save();
      //La forme de la tête
      objC2D.translate(0.05, 0.075);
      
      objC2D.globalCompositeOperation="source-over";    
  
      
      //Jambe gauche
      // objC2D.lineCap = "round";
      objC2D.lineWidth = "0.001"
      objC2D.beginPath();
      objC2D.fillStyle = "gold";
      objC2D.moveTo(-0.03, -0.005);
      objC2D.lineTo(0.12, 0.07);
      objC2D.lineTo(0.07, 0.12);
      objC2D.lineTo(-0.12, 0.06);
      objC2D.closePath();
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.ellipse(0.07,0.16, 0.025, 0.1, 30 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.ellipse(0.065,0.245, 0.05, 0.02, 12 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      //bras gauche
      objC2D.beginPath();
      objC2D.moveTo(-0.04, -0.24);
      objC2D.lineTo(-0.18, -0.12);
      objC2D.lineTo(-0.05, 0.01);
      objC2D.lineTo(-0.05, -0.06);
      objC2D.lineTo(-0.12, -0.11);
      objC2D.lineTo(-0.04, -0.2);
      objC2D.fill();
  
      // torse
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.04,-0.1, 0.055, 0.2, 15 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
  
      //postérieur
      objC2D.beginPath()
      objC2D.fillStyle = "grey";
      objC2D.ellipse(-0.11,0.06, 0.02, 0.06, 15 * Math.PI/180, 0, 2 * Math.PI, true ); //changer pour moveTo/linwTo
      objC2D.fill();
  
      //jambe droite
      objC2D.beginPath()
      objC2D.fillStyle = "pink";
      objC2D.moveTo(-0.12, 0.03);
      objC2D.lineTo(-0.045, 0.06);
      objC2D.lineTo(-0.1,0.21);
      objC2D.lineTo(-0.18,0.32);
      objC2D.lineTo(-0.23,0.31);
      objC2D.lineTo(-0.17,0.2);
      objC2D.fill();
  
      //pied droit
      objC2D.beginPath();
      objC2D.ellipse(-0.19,0.335, 0.022, 0.05, -45 * Math.PI/180, 0, 2 * Math.PI, true );
      // objC2D.ellipse(0.16,0.19, 0.05, 0.15, 30 * Math.PI/180, 0, 2 * Math.PI, true );
      objC2D.fill();
      
      //cou
      objC2D.beginPath();
      objC2D.fillStyle = "grey";
      objC2D.fillRect(-0.024, -0.3, 0.05, 0.03)
      
      //bras droit
      objC2D.beginPath();
      objC2D.srokeStyle = "black";
      objC2D.fillStyle = "pink";
      objC2D.ellipse(0.03, -0.14, 0.03, 0.12, -2 * Math.PI/180, 0, 2 * Math.PI, true);
      objC2D.fill();
      objC2D.stroke();
      
      objC2D.beginPath();
      objC2D.moveTo(0.035, -0.02);
      objC2D.lineTo(0.02,-0.06);
      objC2D.lineTo(0.17,-0.08);
      objC2D.lineTo(0.2,-0.06);
      objC2D.fill();
     
      //Tête
      objC2D.beginPath();
      objC2D.fillStyle = "red";
      objC2D.ellipse(0, -0.36, 0.05, 0.07, -11 * Math.PI/180, 0, 2 * Math.PI, true);
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