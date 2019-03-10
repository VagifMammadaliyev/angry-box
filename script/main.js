$(function () {
    setAreaHeight();
    setSpeed(20);
    pxs = []; // all players' x coordinates
    pys = []; // all players' y coordinates
    my = $('.gamearea').innerHeight() / 80; // max y
    mx = $('.gamearea').innerWidth() / 80; // max x
    
    // var player1 = new Player('player1', 1, 1, 38, 40, 37, 39, 0, 'red', 'darkred');
    // var player2 = new Player('player2', mx, 1, 87, 83, 65, 68, 1, 'blue', 'darkblue');
    // var player3 = new Player('player3', 1, my, 73, 75, 74, 76, 2, 'yellow', 'orange');
    // var player4 = new Player('player4', mx, my, 104, 101, 100, 102, 3, 'lime', 'green');

    generateFood(); // initial food
})