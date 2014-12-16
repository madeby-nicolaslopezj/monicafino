Template.home.helpers({
    homeImages: function () {
        return orion.dictionary.get('homeImages').map(function(document, index){
			document.index = index;
			return document;
		});
    },
    isCero: function(index) {
    	return index == 0;
    }
});

Template.home.rendered = function () {
	$("#carousel-home").carousel({
		interval: 7000
	});

	$("#home").css({'padding-top': $(".header").outerHeight() + 40});
};