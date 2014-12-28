openGallery = function(items) {
	Session.set('galleryItems', items);
}

Deps.autorun(function () {
	if (Session.get('galleryItems') && !!Session.get('galleryItems').length) {
		$("body").css({'overflow':'hidden'});
	} else {
		$("body").css({'overflow':''});
	}
});

Template.fullScreenGallery.helpers({
	shouldBeOpen: function() {
		try	{
			return !!Session.get('galleryItems').length;
		} catch (e) {
			return false;
		}
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
	'click .item': function(event) {
		if ($(event.target).parents(".information-container").length == 0 &&
			!$(event.target).is('a')) { 
			$('#carousel-gallery').carousel('next')
		}
	},
	'click': function(event) {
		if (
			$(event.target).attr('class') == 'full-screen-gallery' ||
			$(event.target).attr('class') == 'carousel-indicators'
			) {
			Session.set('galleryItems', null);
		}
	}
});

Template.fullScreenGallery.rendered = function () {
	Session.set('hidingInformation', true);
	$('#carousel-gallery').carousel({
		interval: 4000
	})
};