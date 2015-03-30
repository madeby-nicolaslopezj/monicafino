Template.newsIndexItem.helpers({
    getDate: function (date) {
        return moment(date).format('MMMM Do YYYY');
    }
});

Template.newsShow.helpers({
    getDate: function (date) {
        return moment(date).format('MMMM Do YYYY');
    }
});