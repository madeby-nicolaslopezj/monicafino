Template.projects.helpers({
	projects: function () {
		return orion.entities.projects.collection.find();
	}
});

Template.projectsItem.events({
	'click .imageBox, click .link a': function () {
		openGallery(this.gallery);
	}
});