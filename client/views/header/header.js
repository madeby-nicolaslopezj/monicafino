Template.header.rendered = function () {
	$('body').scrollspy({
		target: '.header',
		offset: $(".header").outerHeight()
	})
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