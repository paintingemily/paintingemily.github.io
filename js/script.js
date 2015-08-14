$(function(){
      $('#menu').slicknav();
    });

$('#logo').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    });
});

$('#nav-work').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 79
    }, 1000);
});

$('#nav-about').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$('#nav-contact').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 79
    }, 1000);
});

$(document).ready(function() {
    
    //Get Sections top position
    function getTargetTop(elem){
        
        //gets the id of the section header
        //from the navigation's href e.g. ("#html")
        var id = elem.attr("href");

        //Height of the navigation
        var offset = 80;

        //Gets the distance from the top and 
        //subtracts the height of the nav.
        return $(id).offset().top - offset;
    }

     //Pulling sections from main nav.
        var sections = $('a[href^="#"]');

        // Go through each section to see if it's at the top.
        // if it is add an active class
        function checkSectionSelected(scrolledTo){
            
            //How close the top has to be to the section.
            var threshold = 100;

            var i;

            for (i = 0; i < sections.length; i++) {
                
                //get next nav item
                var section = $(sections[i]);

                //get the distance from top
                var target = getTargetTop(section);
                
                //Check if section is at the top of the page.
                if (scrolledTo > target - threshold && scrolledTo < target + threshold) {

                    //remove all selected elements
                    sections.removeClass("active");

                    //add current selected element.
                    section.addClass("active");
                }

            };
        }


        //Check if page is already scrolled to a section.
        checkSectionSelected($(window).scrollTop());

        $(window).scroll(function(e){
            checkSectionSelected($(window).scrollTop())
        });



    });