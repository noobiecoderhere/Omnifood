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
    
    $('#js-sect-features').waypoint(function(direction){
        console.log(1)  
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
});