var scrollTo = function(id, count) {
	count = count || 0;
	console.log(count);
	var left = ($(id).offset().top - $(window).scrollTop()) - $(".header").outerHeight();
	if (left > 0 && count < 2) {
		$("html, body").animate({
			scrollTop: $(window).scrollTop() + left
		}, 50, function() {
			count++;
			scrollTo(id, count);
		})
	}
}

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
		    	scrollTo(id);
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
	    	scrollTo(id);
	    });

	    return false;
	}
});