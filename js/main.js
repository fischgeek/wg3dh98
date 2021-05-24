$(document).ready(function() {

    //if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    //    $('#container').css('margin-top','65px');
    //}

    $('#target').bind('touchstart', function() {
        $('#container').removeClass('dropShadow');
    });

    $('#target').bind('touchend', function() {
        // add the shadow back in
        $('#container').addClass('dropShadow');

        // set the target element to no text
        $(this).text('');

        // hide the team image
        $('#teamImgContainer').css('display', 'none');

        // animate the target element to 100% width
        $('#container').animate({
            width: '100%'
        }, 500, function() {

            // when the animation is finished, jump into the isolated function getTeam()
            var i = 0;
            getTeam();

            function getTeam() {
                // get a random li element from the ul below
                var li = $('ul li:nth-child(' + getRandom() + ')');

                // set the target element's text to the text of the retreived li
                $('#target').text(li.text());

                // set the img element to the team's image
                $('#teamImg').attr('src', 'img/' + li.text() + '.png');

                // continue getting random li's (teams) until the counter reaches 50
                if (i++ < 50) {
                    setTimeout(getTeam, 100);
                } else {
                    $('#teamImgContainer').css('display', 'block');
                }
            }
            return false;
        });
    });
});

function getRandom() {
    // get a random number between 1 and 26
    return Math.floor((Math.random() * 26) + 1);
}