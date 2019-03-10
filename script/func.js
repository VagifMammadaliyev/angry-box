function setSpeed(s) {
    if (1500 / s > 300) {
        time = 300; // max value
    } else {
        time = 1500 / s;
    }
}

function getSpeed() {
    return time;
}

function addScore(score, primarycolor) {
    score++;
    showScore(score, primarycolor);
}

function showScore(score, primarycolor) {
    $('.gamearea').append('<div class="score">' + score + '</div>');
    var scoreON = $('.score');
    scoreON.css({
        color: primarycolor
    })
    scoreON.animate({
        color: primarycolor,
        opacity: 0,
        fontSize: 500 + 'px'
    }, 1000)

    removelastscoreON();
}

function removelastscoreON() {
    setTimeout(function () {
        $('.score').remove();
    }, 500)
}

function generateFood() {
    $('.gamearea').append('<div class="food"></div>');
    var food = $('.food');
    fy = Math.floor(Math.random() * my) + 1; // food's y
    fx = Math.floor(Math.random() * mx) + 1; // food's x

    for (var i = 0; i < pxs.length; ++i) {
        while (fx == pxs[i] && fy == pys[i]) {
            fy = Math.floor(Math.random() * my) + 1; // food's y
            fx = Math.floor(Math.random() * mx) + 1; // food's x
        }
    }


    food.css({
        top: fy * 80 - 40 + 'px',
        left: fx * 80 - 40 + 'px'
    })
}

function eat(playerscore, primarycolor) {
    addScore(playerscore, primarycolor);

    var food = $('.food');
    food.addClass('eaten');
    food.animate({
        height: 0,
        width: 0,
        border: '0px',
        backgroundColor: 'white',
        borderRadius: '0%'
    }, 350)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setAreaHeight() {
    var h = 4000; // initial gamearea height (without borders and paddings), it will be decreased
    var m = 20; // gamearea's margin-top value
    var bh = 5; // gamearea's border thickness
    var vp = $(window).height(); // browser viewport

    while (bh * 2 + h + 20 > vp) {
        h -= 80;
    }

    h += bh * 2;

    $('.gamearea').css('height', h);
}

function scoreTableAdd(st, score) {
    st.text(score);
}

function getPrimColor(primcolor) {
    if (primcolor == 'rgb(0, 0, 0)') {
        primcolor = 'gray';
    }

    return primcolor;
}

function getSecColor(primcolor) {
    var seccolor = '#876000';
    if (primcolor == 'rgb(0, 0, 0)'){
        primcolor = 'gray';
    }

    switch (primcolor) {
        case 'rgb(255, 0, 0)': seccolor = 'darkred'; break;
        case 'rgb(255, 165, 0)': seccolor = 'darkgoldenrod'; break;
        case 'rgb(255, 255, 0)': seccolor = 'orange'; break;
        case 'rgb(0, 255, 0)': seccolor = 'green'; break;
        case 'rgb(0, 128, 0)': seccolor = 'darkgreen'; break;
        case 'rgb(0, 255, 255)': seccolor = 'blue'; break;
        case 'rgb(0, 0, 255)': seccolor = 'darkblue'; break;
        case 'rgb(128, 0, 128)': seccolor = '#641b56'; break;
        case 'rgb(255, 0, 255)': seccolor = 'purple'; break;
        case 'gray': seccolor = 'black'; break;
    }

    return seccolor;
}

function setKeyCodes(onekey) {
    if (onekey == "W") {
        _newup = 87;
        _newleft = 65;
        _newdown = 83;
        _newright = 68;
    }

    if (onekey == "T") {
        _newup = 84;
        _newleft = 70;
        _newdown = 71;
        _newright = 72;
    }

    if (onekey == "I") {
        _newup = 73;
        _newleft = 74;
        _newdown = 75;
        _newright = 76;
    }

    if (onekey == '<i class="fas fa-arrow-up"></i>') {
        _newup = 38;
        _newleft = 37;
        _newdown = 40;
        _newright = 39;
    }
}