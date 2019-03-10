$(function () {
    playernumber = 1;
    _newpx = 1;
    _newpy = 1;

    var opened = false;

    var addbtn = $('.newplayer');
    addbtn.click(function () {
        if (opened == false) {
            $('.newbox-set.new-window').css({
                display: 'block'
            });

            opened = true;
        }
    })

    var demobox = $('#demobox');
    var color = $('.color');

    color.click(function (e) {
        demobox.css({
            backgroundColor: getPrimColor($(this).css('backgroundColor')),
            border: '3px solid ' + getSecColor($(this).css('backgroundColor')),
            color: getSecColor($(this).css('backgroundColor'))
        });

        // (new) global !!!
        newprimcolor = getPrimColor($(this).css('backgroundColor'));
        newseccolor = getSecColor($(this).css('backgroundColor'));
    });

    // Next button -- // -- go to control select //
    var to_control = $('.next.submit').click(function () {
        $('.newbox-set.new-window').hide();
        $('.newcontrol-set.new-window').show();
    })

    var control_set = $('.keys').click(function () {
        // (new global) !!!
        _newup = 0; _newleft = 0; _newdown = 0; _newright = 0;

        $(this).find('.key').addClass('disabled');
        setKeyCodes($(this).find('.key:first-child').html());
        $('.newcontrol-set.new-window').hide();

        new Player(
            'player'+playernumber, 
            _newpx, _newpy, 
            _newup, _newdown, _newleft, _newright, 
            playernumber - 1, newprimcolor, newseccolor);
        playernumber++;
        opened = false;

        if (playernumber == 2) {
            _newpx = mx;
        } else if (playernumber == 3) {
            _newpy = my;
            _newpx = 1;
        } else if (playernumber == 4) {
            _newpy = my;
            _newpx = mx;
        }
     })
})