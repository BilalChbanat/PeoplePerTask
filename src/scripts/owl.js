$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        loop:true,
        autoplay:true,
        autoplayTimeout: 6000,
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
$('.customNextBtn').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
})
  });