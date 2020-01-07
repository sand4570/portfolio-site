(document).ready(function () {
    ('.showmenu').on('click', function () {
        ('body').toggleClass('menu-show');
    });
    ('a').on('click', function () {
        if ($(this).next('ul').length > 0 && ('.submenu').css('display') == 'none') {
            $(this).next('ul').show();
        } else if ($(this).next('ul').length > 0 && ('.submenu').css('display') == 'block') {
            $(this).next('ul').hide();
        }
    });
});
