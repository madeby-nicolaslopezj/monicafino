Template.about.events({
    'click .secondary-images img': function (evt) {
    	var index = parseInt($(evt.target).attr('data-index'));
    	var items = orion.entities.aboutGalleryImages.collection.find({aboutIndex: index}).fetch()
    	openGallery(items);
    }
});