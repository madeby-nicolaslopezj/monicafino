openGallery = function(items) {
	Session.set('galleryItems', items);
}

Deps.autorun(function () {
	if (Session.get('galleryItems')) {
		$("body").css({'overflow':'hidden'});
	} else {
		$("body").css({'overflow':''});
	}
});

Template.fullScreenGallery.helpers({
	shouldBeOpen: function() {
		return !!Session.get('galleryItems');
	},
	hidingInformation: function() {
		return Session.get('hidingInformation');
	},
	items: function() {
		return Session.get('galleryItems').map(function(document, index){
			document.index = index;
			return document;
		});
	},
    isCero: function(index) {
    	return index == 0;
    },
    needsCarousel: function() {
    	return Session.get('galleryItems').length > 1;
    }
});

Template.fullScreenGallery.events({
	'click .close': function () {
		Session.set('galleryItems', null);
	},
	'click .information-btn a': function() {
		Session.set('hidingInformation', !Session.get('hidingInformation'));
	},
	'click': function(event) {
		if (
			!$(event.target).is('a') &&
			!$(event.target).is('li') && 
			!$(event.target).is('i')
			) {
			Session.set('galleryItems', null);
		}
		console.log($(event.target));
	}
});

Template.fullScreenGallery.rendered = function () {
	Session.set('hidingInformation', true);
	$('#carousel-gallery').carousel({
		interval: 4000
	})
};