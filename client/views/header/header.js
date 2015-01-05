Template.header.rendered = function () {
	$('body').scrollspy({
		target: '.header-page',
		offset: $(".header").outerHeight()
	})

	$(".nav li.home").on('activate.bs.scrollspy', function (event) {
		$(".header").addClass('on-home');
	})
	$(".nav li:not(.home)").on('activate.bs.scrollspy', function () {
		$(".header").removeClass('on-home');
		$(".header-margin").height(0);
	})

	$('body').imagesLoaded( function() {
		if (window.location.hash) {
			var margin = $(window).width() > 768 ? $(".header").outerHeight() : 0;
			$('html, body').animate({
		        scrollTop: $(window.location.hash).offset().top - margin + 1
		    }, 1000, function() {
		    	var margin = $(window).width() > 768 ? $(".header").outerHeight() : 0;
		    	$('html, body').animate({
			        scrollTop: $(window.location.hash).offset().top - margin + 1
			    }, 50);
		    });
		}
	});
};

Template.header.events({
	'click .nav a': function (event) {
		var id = $(event.target).attr('href');
		
		var margin = $(window).width() > 768 ? $(".header").outerHeight() : 0;
		$('html, body').animate({
	        scrollTop: $(id).offset().top - margin + 1
	    }, 500, function() {
	    	var margin = $(window).width() > 768 ? $(".header").outerHeight() : 0;
	    	$('html, body').animate({
		        scrollTop: $(id).offset().top - margin + 1
		    }, 50);
	    });

	    return false;
	}
});