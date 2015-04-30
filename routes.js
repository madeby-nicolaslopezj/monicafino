SiteController = RouteController.extend({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		SEO.set({
			title: orion.dictionary.get('seoTitle'),
			link: {
				//icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': orion.dictionary.get('seoDescription')
			},
			og: {
				'title': orion.dictionary.get('seoTitle'),
				'description': orion.dictionary.get('seoDescription'),
				'image': orion.dictionary.get('seoImage.url')
			}
		});
	}
});

Router.route('/', {
	name: 'home',
	layoutTemplate: 'homeLayout',
	controller: 'SiteController'
});

Router.route('/services', {
	name: 'services',
	controller: 'SiteController'
});

Router.route('/about', {
	name: 'about',
	controller: 'SiteController',
	waitOn: function() {
		return orion.subs.subscribe('entity', 'aboutGalleryImages');
	},
});

Router.route('/projects', {
	name: 'projects',
	controller: 'SiteController',
	waitOn: function() {
		return orion.subs.subscribe('entity', 'projects');
	}
});

Router.route('/contact', {
	name: 'contact',
	controller: 'SiteController'
});

Router.route('/news', {
	name: 'news.index',
	controller: 'SiteController',
	waitOn: function() {
		return orion.subs.subscribe('entity', 'news');
	},
	data: function() {
		return {
			posts: orion.entities.news.collection.find({}, {sort: {createdAt:-1}})
		}
	}
});

Router.route('/news/:_id', {
	name: 'news.show',
	layoutTemplate: 'mainLayout',
	waitOn: function() {
		return orion.subs.subscribe('entity', 'news');
	},
	data: function() {
		return orion.entities.news.collection.findOne(this.params._id);
	},
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var post = orion.entities.news.collection.findOne({_id: this.params._id});
		SEO.set({
			title: post.title,
			link: {
				//icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': post.preview
			},
			og: {
				'title': post.title,
				'description': post.preview,
				'image': post.image.url
			}
		});
	}
});
