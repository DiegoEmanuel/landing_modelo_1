


$(function () {

	"use strict";
	var wind = $(window);


	$.scrollIt({
		upKey: 38, // 
		downKey: 40, // 
		easing: 'swing', // 
		scrollTime: 600, // 
		activeClass: 'active', // 
		onPageChange: null, // 
		topOffset: -15 // 
	});



	wind.on("scroll", function () {
		var bodyScroll = wind.scrollTop(),
			navbar = $(".navbar")
		if (bodyScroll > 300) {
			navbar.addClass("fixed-top");
		} else {
			navbar.removeClass("fixed-top");
		}
	});
	

});

