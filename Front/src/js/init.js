jQuery.namespace = (function ($) {
    $(function () {

        $('.sidenav').sidenav();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "PC": 'https://www.betaarchive.com/wiki/images/9/94/Pc-logo-png.png',
            "PLAYSTATION 4": 'https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg',
            "PLAYSTATION 5": 'https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg',
            "XBOX ONE": 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png',
            "XBOX ONE SERIES": 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png'
        },
    });
});


$(document).ready(function () {
    $('.materialboxed').materialbox();
});


$(document).ready(function () {
    $('.slider').slider();
});

$(document).ready(function () {
    $('.collapsible').collapsible();
});