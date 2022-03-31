
(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {




		$(function () {
			$('.caption-inner').animatedHeadline({
				animationType: 'clip'
			});
		})



		$('.screenshot-slider').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: false,
			center: true,
			autoplay: true,
			autoplayTimeout: 8000,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive: {
				0: {
					items: 2,
					nav: true,
                    center: false,
				},
				767: {
					items: 2,
					nav: true,
				},
				768: {
					items: 1,
					nav: true,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 4
				}
			}
		});



		$(".reviews-slider").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 30,
			touchDrag: true,
			mouseDrag: true,
			items: 1,
			nav: false,
			dots: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200
		});



		var wow = new WOW({
			mobile: false
		});
		wow.init();


	});



	$(window).on('load', function () {
		$('#page-loader').fadeOut(200, function () {});
	});


}(jQuery));

