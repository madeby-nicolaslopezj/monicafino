var subscriptions = function() {
	return [
		orion.subs.subscribe('dictionary'),
		orion.subs.subscribe('entity', 'aboutGalleryImages'),
		orion.subs.subscribe('entity', 'projects'),
		orion.subs.subscribe('entity', 'news')
	]
}

Router.map(function() {

	this.route('site', {
		path: '/',
		loadingTemplate: 'adminLoading',
		waitOn: subscriptions,
	});

	this.route('post', {
		path: '/news/:_id',
		loadingTemplate: 'adminLoading',
		waitOn: subscriptions,
		data: function() {
			return orion.entities.news.collection.findOne({_id: this.params._id});
		}
	});

});
