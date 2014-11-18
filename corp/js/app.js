var app = (function () {
    $(".search-btn").click(function () {
        if ($(".search-btn").hasClass("box-is-show")) {
            $(".search-box").fadeIn(300);
            $(".search-btn").removeClass("box-is-show")
        }
        else
        {
            $(".search-box").fadeOut(300);
            $(".search-btn").addClass("box-is-show")
        }
    });
})();