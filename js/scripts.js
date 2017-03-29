$(function(){
	var carouselList = $("#carousel ul");
	

	setInterval(function changeSlides() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}, 3000);


	function moveFirstSlide() {
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}
});