$(document).ready(function() {
    $('#side-menu ul li a').each(function() {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });

});