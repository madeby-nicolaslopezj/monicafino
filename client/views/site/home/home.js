Template.home.helpers({
    homeImages: function () {
    	var images = orion.dictionary.get('homeImages').map(function(document, index){
        	
			document.item.index = index;
			return document.item;
		});
        return images;
    },
    isCero: function(index) {
    	return index == 0;
    }
});

Template.home.rendered = function () {
	$("#carousel-home").carousel({
		interval: 7000
	});

	$("#home").css({'padding-top': $(".header").outerHeight() + 15});
};