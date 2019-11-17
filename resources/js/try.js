// // STICKY NAVIGATION BAR USING PLAIN JAVASCRIPT

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// var features = document.getElementById("js-sect-features")
// // Get the offset position of the navbar
// var sticky = features.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky - 180) {
//     navbar.classList.remove("non-sticky")
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//     navbar.classList.add("non-sticky")
//   }
// }

// STICKY NAVIGATION USING jQUERY

$(document).ready(function(){

    //STICKY NAVIGATION
    
    $('#js-sect-features').waypoint(function(direction){ 
        if(direction == "down"){
            $('nav').removeClass('non-sticky');
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
            $('nav').addClass('non-sticky');
        }
    },{
        offset : '150px'
    });

    // MOBILE NAVIGATION

    $('.js-mobile-navicon').click(function(){
        var nav = $('.js-main-nav')
        var classname = $('nav').attr('class')
        var icon = $('.js-mobile-navicon i')
        nav.slideToggle(100)

        if(icon.hasClass('ion-navicon-round')){
            
            $('.sticky').css('height','25%');
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
            
        }else{
            $('.sticky').css('height','10%')
            icon.removeClass('ion-close-round')
            icon.addClass('ion-navicon-round')
            
        }
    });

    // ANIMATIONS
    
    $('.js-fade-in-features').waypoint(function(direction){
        
        $('.js-fade-in-features').addClass('animated fadeIn');
    },{
        offset : '50%'
    })

    $('.js-fade-in-cities').waypoint(function(direction){
        
        $('.js-fade-in-cities').addClass('animated fadeIn');
    },{
        offset : '50%'
    })

    $('.js-fade-in-mobimg').waypoint(function(direction){
        
        $('.js-fade-in-mobimg').addClass('animated fadeInUp');
    },{
        offset : '50%'
    })

    $('.js-pulse-plan').waypoint(function(direction){
        
        $('.js-pulse-plan').addClass('animated pulse');
    },{
        offset : '50%'
    })
});