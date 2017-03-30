$(function(){
	var carouselList = $("#carousel ul"),
		prevbtn = $('#prevbtn'),
		nextbtn = $('#nextbtn');
	

	setInterval(function changeSlides() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

	}, 3000);


	function moveFirstSlide() {
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}

	nextbtn.on('click', function changeOneSlideForward () {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	});

	prevbtn.on('click', function changeOneSlidePrevious () {
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginRight: 0});
		carouselList.animate({'marginRight': -400}, 500);
	});

	var carouselPagination = $('#carousel-pagination');

	function pagination() {

		carouselPagination.on('#carousel-pagination:active', 'li img', function() {
		carouselPagination.addClass('active');
		});
	
		carouselPagination.on('#carousel-pagination:inactive', 'li img', function() {
		carouselPagination.removeClass('active');
		});
	}

	pagination();


});

