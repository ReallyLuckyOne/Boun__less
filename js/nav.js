$(function() {

    let header = $("#header");
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if( scrollPos > 100 ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
    
    
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let burgerItem = $(".burger__item");
    
    
    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        burgerItem.removeClass("active");
        
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });


    /* burger */
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show"); 
        burgerItem.toggleClass("active");
    });

});