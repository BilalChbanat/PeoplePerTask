$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: [$('.NextBtn'),$('.PrevBtn')],
        margin: 20,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:2,
            },
            1140:{
                items:3,
            },
            1500:{
                items:4,
            }
        }
    });
  });