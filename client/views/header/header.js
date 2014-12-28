Template.header.rendered = function () {
	$('body').scrollspy({
		target: '.header-page',
		offset: $(".header").outerHeight()
	})

	$(".nav li.home").on('activate.bs.scrollspy', function (event) {
		$(".header .social").fadeOut(100);
	})
	$(".nav li:not(.home)").on('activate.bs.scrollspy', function () {
		$(".header .social").fadeIn(200)
	})

	$('body').imagesLoaded( function() {
		if (window.location.hash) {
			$('html, body').animate({
		        scrollTop: $(window.location.hash).offset().top - $(".header").outerHeight() + 1
		    }, 1000);
		}
	});
};

Template.header.events({
	'click .nav a': function (event) {
		var id = $(event.target).attr('href');
		
		$('html, body').animate({
	        scrollTop: $(id).offset().top - $(".header").outerHeight() + 1
	    }, 500);

	    return false;
	}
});