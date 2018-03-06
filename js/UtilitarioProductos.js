$(window).scroll(function () {
    if ($("nav").offset().top > 56) {
        $("nav").addClass("bg-white-light");
        $(".button-previous").css("visibility", "visible");
    } else {
        $("nav").removeClass("bg-white-light");
        $(".button-previous").css("visibility", "hidden");
    }
});
$(document).ready(function () {
    $('a[href^="#Banner-Producto"]').click(function () {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 800);
        return false;
    });
    setTimeout(function () {
        $(".loader").addClass("fadeOut");
    }, 200);
    setTimeout(function () {
        $(".loader").addClass("Ocultar");
    }, 300);
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    } else {
        $("article.FondoImg").addClass("bg-attachment-fixed");
    }
    $('.aniview').AniView();
});
$(".rotate").click(function () {
    var vIconoDesplegar = $(this).find("i");
    vIconoDesplegar.toggleClass("down");

});
