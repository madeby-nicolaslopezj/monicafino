var limit = 6;

Template.blog.helpers({
	blog: function () {
        var page = Session.get('blogPage');
        var skip = limit * page;
        all = orion.entities.blog.collection.find({}, {sort: {createdAt:-1}, limit: limit, skip: skip}).fetch();
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
        return orion.entities.blog.collection.find().count() > limit;
    },
    canGoLeft: function() {
        return Session.equals('blogPage', 0) ? 'disabled' : '';
    },
    canGoRight: function() {
        var page = Session.get('blogPage') + 1;
        var skip = limit * page;
        return orion.entities.blog.collection.find({}, {sort: {createdAt:-1}, limit: limit, skip: skip}).count() > 0 ? '' : 'disabled';
    }
});

Template.blogItem.helpers({
    getDate: function (date) {
        return moment(date).format('MMMM Do YYYY');
    }
});

Template.blog.rendered = function () {
    Session.set('blogPage', 0);
};

Template.blog.events({
    'click .pager .left': function () {
        Session.set('blogPage', Session.get('blogPage') - 1);
    },
    'click .pager .right': function () {
        Session.set('blogPage', Session.get('blogPage') + 1);
    }
});