$(document).ready(function() {
    var carouselList = $("#carousel ul");

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem)
        carouselList.css({marginLeft:0});
    }

    function changeSlide() {
         carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
    }

    //setInterval(changeSlide, 3000);

    $(".prevButton").click(function(e) {
       e.preventDefault();
       changeSlide();
    });

    function changeSlideRight() {
         carouselList.animate({'marginLeft': 400}, 500, moveFirstSlide);
    }


    $(".nextButton").click(function(e) {
       e.preventDefault();
       changeSlideRight();
    });


});
