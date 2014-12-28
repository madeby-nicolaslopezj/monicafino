Template.post.rendered = function () {
	$("#post").css({'padding-top': $(".header").outerHeight() + 40});
	$('html, body').animate({
        scrollTop: 0
    }, 0);
};

Template.post.helpers({
	getDate: function (date) {
        return moment(date).format('MMMM Do YYYY');
    }
});