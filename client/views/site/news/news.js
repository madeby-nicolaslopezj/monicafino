var limit = 6;

Template.news.helpers({
	news: function () {
        var page = Session.get('newsPage');
        var skip = limit * page;
        all = orion.entities.news.collection.find({}, {sort: {createdAt:-1}, limit: limit, skip: skip}).fetch();
        chunks = [];
        size = 2
        while (all.length > size) {
            chunks.push({ row: all.slice(0, size)});
            all = all.slice(size);
        }
        chunks.push({row: all});
        return chunks;
    },
    moreThanLimit: function() {
        return orion.entities.news.collection.find().count() > limit;
    },
    canGoLeft: function() {
        return Session.equals('newsPage', 0) ? 'disabled' : '';
    },
    canGoRight: function() {
        var page = Session.get('newsPage') + 1;
        var skip = limit * page;
        return orion.entities.news.collection.find({}, {sort: {createdAt:-1}, limit: limit, skip: skip}).count() > 0 ? '' : 'disabled';
    }
});

Template.news.rendered = function () {
    Session.set('newsPage', 0);
};

Template.news.events({
    'click .pager .left': function () {
        Session.set('newsPage', Session.get('newsPage') - 1);
    },
    'click .pager .right': function () {
        Session.set('newsPage', Session.get('newsPage') + 1);
    }
});