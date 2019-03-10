function Player(
        newplayer, newpx, newpy, newup, 
        newdown, newleft, newright, 
        arraypos, color1, color2) {
    var px = newpx; // player's y
    var py = newpy; // player's x
    pxs[arraypos] = px;
    pys[arraypos] = py;

    var playerscore = 0;

    $('.gamearea').append('<div class="' + newplayer + ' playerbox box"><i class="fas fa-smile"></i></div>');

    var player = $('.' + newplayer);

    var primarycolor = color1;
    var secondarycolor = color2;

    player.css({
        backgroundColor: primarycolor,
        border: '3px solid ' + secondarycolor,
        color: secondarycolor,
        top: py * 80 - 40,
        left: px * 80 - 40
    });

    //UP
    $(document).keyup(function (e) {
        if (e.which == newup) {
            if (py - 1 > 0) {
                // $(this).removeClass('active');
                py--;

                pxs[arraypos] = px;
                pys[arraypos] = py;

                player.animate({
                    top: '-=80px'
                }, getSpeed())
            }
        }
    })

    //DOWN
    $(document).keyup(function (e) {
        if (e.keyCode == newdown) {
            if (py + 1 <= my) {
                // $(this).removeClass('active');
                py++;

                pxs[arraypos] = px;
                pys[arraypos] = py;

                player.animate({
                    top: '+=80px'
                }, getSpeed())
            }
        }
    });

    //LEFT
    $(document).keyup(function (e) {
        if (e.which == newleft) {
            if (px - 1 > 0) {
                // $(this).removeClass('active');
                px--;

                pxs[arraypos] = px;
                pys[arraypos] = py;

                player.animate({
                    left: '-=80px'
                }, getSpeed())
            }
        }
    });

    //RIGHT
    $(document).keyup(function (e) {
        if (e.which == newright) {
            if (px + 1 <= mx) {
                // $(this).removeClass('active');
                px++;

                pxs[arraypos] = px;
                pys[arraypos] = py;

                player.animate({
                    left: '+=80px'
                }, getSpeed())
            }
        }
    });

    // All directions
    $(document).keyup(function (e) {
        if (e.which == newup || e.which == newdown || e.which == newleft || e.which == newright) {
            if (px == fx && py == fy && !$('.food').hasClass('eaten')) {
                eat(playerscore, primarycolor);
                setTimeout(function () {
                    $('.food').remove();
                    generateFood();
                }, 350)
                playerscore++;
                scoreTableAdd($('.p' + (arraypos + 1)), playerscore);
            }
        }
    });

    // Score counter
    $('body').append('<div class="scoretable p' + (arraypos + 1) + '">' + playerscore + '</div>');
    var sc = $('.p'+ (arraypos + 1));
    sc.css({
        top: arraypos * 40 + 20 + 'px',
        color: primarycolor
    });
}