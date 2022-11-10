$( document ).ready(function() {
    navBasica();
});

function navBasica(){
    $('a[href*="#"]:not([href="#"]) ').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname ==this ) {
        var target =$(this.hash);
        target = target.lenght ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.lenght) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 30000);
            return false;
        }
        }
});
}