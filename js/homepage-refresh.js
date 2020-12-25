$(function () {
    var $window = $(window);
    var $pane = $('.section-services__service-mag-article-container');

    function slider_mobile() {
        var windowsize = $window.width();
        var pos = 0;

        if (windowsize > 768) {
            $pane.removeClass("mobile-slider");
            $(".section-services__service-mag-article-container").css("transform", "translateX(0%)");
            $pane.on("swipeleft", function (e) {
                $(".section-services__service-mag-article-container").css("transform", "translateX(0%)");
            });
        }

        if (windowsize < 768) {
            $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(29%)");
            var slider_size = $(".section-services__service-mag-article-container").width();
            var actual_translate = $(".section-services__service-mag-article-container").css("transform");
            var slider_px = slider_size / 3;
            var $bullet = $(".section-services__service-mag-bullet");
            var $bullet1 = $(".section-services__service-mag-bullet:nth-child(1)");
            var $bullet2 = $(".section-services__service-mag-bullet:nth-child(2)");
            var $bullet3 = $(".section-services__service-mag-bullet:nth-child(3)");

            $($bullet1).click(function () {
                pos = 0;
                $(".section-services__service-mag-bullet").addClass("animate");
                $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(29%)");
                $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                $(".section-services__service-mag-bullet:nth-child(1)").addClass("section-services__service-mag-bullet--blue");
            });
            $($bullet2).click(function () {
                pos = 1;
                $(".section-services__service-mag-bullet").addClass("animate");
                $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(0)");
                $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                $(".section-services__service-mag-bullet:nth-child(2)").addClass("section-services__service-mag-bullet--blue");
            });
            $($bullet3).click(function () {
                pos = 2;
                $(".section-services__service-mag-bullet").addClass("animate");
                $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(-29%)");
                $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                $(".section-services__service-mag-bullet:nth-child(3)").addClass("section-services__service-mag-bullet--blue");
            });
            $pane.addClass("mobile-slider");

            $pane.on("swipeleft", function (e) {
                $(".section-services__service-mag-bullet").removeClass("animate");
                if (pos == 1) {
                    $(".mobile-slider.section-services__service-mag-bullet").addClass("section-services__service-mag-article-container-animate");
                    $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(-29%)");
                    $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                    $(".section-services__service-mag-bullet:nth-child(3)").addClass("section-services__service-mag-bullet--blue");
                    pos++;
                } else if (pos == 0) {
                    $(".mobile-slider.section-services__service-mag-bullet").addClass("section-services__service-mag-article-container-animate");
                    $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(0%)");
                    $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                    $(".section-services__service-mag-bullet:nth-child(2)").addClass("section-services__service-mag-bullet--blue");
                    pos++;
                }
            });

            $pane.on("swiperight", function (e) {
                if (pos == 1) {
                    $(".mobile-slider.section-services__service-mag-bullet").addClass("section-services__service-mag-article-container-animate");
                    $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(29%)");
                    $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                    $(".section-services__service-mag-bullet:nth-child(1)").addClass("section-services__service-mag-bullet--blue");
                    pos--;
                } else if (pos == 2) {
                    $(".mobile-slider.section-services__service-mag-bullet-container").addClass("section-services__service-mag-article-container-animate");
                    $(".mobile-slider.section-services__service-mag-article-container").css("transform", "translateX(0%)");
                    $(".section-services__service-mag-bullet").removeClass("section-services__service-mag-bullet--blue");
                    $(".section-services__service-mag-bullet:nth-child(2)").addClass("section-services__service-mag-bullet--blue");
                    pos--;
                }
            });
        }
    }
    function menuMobile() {
        var menuOpen = false;
        var $listHeader = $("body:not(.bpf) .top-header .list-header");
        $listHeader.click(function () {
            $(this).toggleClass("menu-mobile-open");
        });
        $listHeader.mouseleave(function(){
            $(this).removeClass('menu-mobile-open');
        });
        
    }
    menuMobile();


    function menuPartMob() {
        var $partNav = $("#headerContent .list-header .nav-part");
        var $ulPart = $("#headerContent .top-header")
        $ulPart.hover(function (event) {
            event.preventDefault();
            $ulPart.toggleClass("menu-mobile");
        });
    }

    // Execute on load
    slider_mobile();
    $("html").addClass("refresh-homepage-nav");
    // Bind event listener
    $(window).resize(slider_mobile);



    // Timer pour vente flash
    if (document.getElementById("section-bienvenue__flash-decompte")!= null)
    {
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 27, 2019 23:59:59").getTime();

        // Update the count down every 1 second     
        var x = setInterval(function () {   
 
            // Get todays date and time
            var now = new Date().getTime(); 

            // Find the distance between now and the count down date
            var distance = countDownDate - now; 

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // var seconds = Math.floor((distance % (1000 * 60)) / 1000); 

            // Display the result in the element with id="demo" 
            document.getElementById("section-bienvenue__flash-decompte").innerHTML = days + "j : " + hours + "h : " + minutes + "m "; //+ seconds + "s "

            // If the count down is finished, write some text   
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("section-bienvenue__flash-decompte").innerHTML = "-Expirée-";
            }
        }, 1000);
    }



    // Appel iframe aquisition
    $("#home_aqui").click(function () {
		$("#home_aqui").parent().children().addClass("hidden");
        if ($(".section-ouverture__formulaire-container").children().length == 0)
        {
            $(".section-ouverture__formulaire-container").removeClass("nextoutilsLoaded");
            OApp.runLoading();
        }
        $(".section-ouverture__formulaire-container").removeClass("hidden");
    });
});
