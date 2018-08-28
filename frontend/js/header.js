jQuery(function ($) {
    let $header = $(".js-header");
    function isOnTop() {
        let vScroll = $(window).scrollTop();
        let topEdge = 50;
        if (topEdge >= vScroll) {
            return true;
        } else {
            return false;
        }
    }

    function isMobileMedia() {
        let media = window.matchMedia("only screen and (max-width: 62em)").matches;
        return media;
    }

    function setPosition() {
        if (isOnTop()) {
            // top position;
            $header.removeClass("is-fixed");
        } else {
            // fixed position
            $header.addClass("is-fixed");
        }
    }

// init
    if ($header.length && !isMobileMedia()) {
        $(window).on("load scroll resize", setPosition);
    }

}); // ready