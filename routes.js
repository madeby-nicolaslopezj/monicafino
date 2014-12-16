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
		onAfterAction: function() {
			if (!Meteor.isClient) {
				return;
			}
			SEO.set({
				title: orion.dictionary.get('seoTitle'),
				link: {
					icon: orion.dictionary.get('seoFavIcon.link'),
				},
				meta: {
					'description': orion.dictionary.get('seoDescription')
				},
				og: {
					'title': orion.dictionary.get('seoTitle'),
					'description': orion.dictionary.get('seoDescription'),
					'image': orion.dictionary.get('seoImage.link')
				}
			});
		}
	});

	this.route('post', {
		path: '/news/:_id',
		loadingTemplate: 'adminLoading',
		waitOn: subscriptions,
		data: function() {
			return orion.entities.news.collection.findOne({_id: this.params._id});
		},
		onAfterAction: function() {
			if (!Meteor.isClient) {
				return;
			}
			var post = orion.entities.news.collection.findOne({_id: this.params._id});
			SEO.set({
				title: post.title,
				link: {
					icon: orion.dictionary.get('seoFavIcon.link'),
				},
				meta: {
					'description': post.preview
				},
				og: {
					'title': post.title,
					'description': post.preview,
					'image': post.image.link
				}
			});
		}
	});

});
