var tabInitial = ["............................",
        "....2.......................",
        "111111131111111.............",
        ".......34444444444.....2....",
        ".......3....113...1111111311",
        ".......3....113..........3..",
        ".......3....113.......2..3..",
        "11311111....1111111131111111",
        "..3.................3.......",
        "..3.................3.......",
        "111111111311111111..3.......",
        ".........3..........3.......",
        ".......2.344444444443...2...",
        "....3111111.........11111113",
        "....3.............2........3",
        "1111111111111111111111111111",
        "5555555555555555555555555555"];

var tabChar = [];

function creerTabChar(tabInitial) {

        for (var i = 0; i < tabInitial.length; i++) {
                tabChar.push(tabInitial[i].split(''))
        }
        
        for (var i = 0; i < tabChar.length; i++) {
                for (var j = 0; j < tabChar[0].length; j++) {
                }
        }

        return tabChar;
}
//créer d'autres tableaux pour les autres niveaux - jouer avec le nb de gardes