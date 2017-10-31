$(document).ready(function() {
    var carouselList = $("#carousel ul");

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem)
        carouselList.css({marginLeft:0});
    }

    function preapreLastSlideToAnimation() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});

    }

    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
    }

    function changeSlideRight() {
        preapreLastSlideToAnimation();
        carouselList.animate({'marginLeft': 0}, 500);
    }

    $(".prevButton").click(function(e) {
       e.preventDefault();
       changeSlideRight();
    });


    $(".nextButton").click(function(e) {
       e.preventDefault();
       changeSlide();
    });


});
