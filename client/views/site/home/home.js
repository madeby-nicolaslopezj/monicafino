setHomeHeight = function() {
    if ($(window).width() > 768) {
        if ($("#home .content").height() <  100) {
            setTimeout(setHomeHeight, 50);
        } else {
            var homeMinHeight = $(window).height();
            $("#home").css({'min-height': homeMinHeight});
            var maxMarginHeight = ($("#home").height() - $("#home .content").height()) / 2;
            console.log(maxMarginHeight, $("#home").height(), $("#home .content").height());

            var onScroll = function() {
                var in_min = 0;
                var in_max = $("#home").height();
                var current = $("#home").height() - $(window).scrollTop();
                var out_min = 0;
                var headerHeight = current.map(in_min, in_max, out_min, maxMarginHeight);
                if (headerHeight > 0 && maxMarginHeight > 0) {
                    $(".header-margin").height(headerHeight - 1);
                } else {
                    $(".header-margin").height(0);
                }
            }

            $(window).scroll(function() {
                onScroll();
            })

            onScroll();
        }
    }
}

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
}

Template.home.helpers({
    homeImages: function () {
    	var images = orion.dictionary.get('homeImages').map(function(document, index){
        	
			document.item.index = index;
			return document.item;
		});
        return images;
    },
    isCero: function(index) {
    	return index == 0;
    }
});

Template.home.rendered = function () {
	$("#carousel-home").carousel({
		interval: 7000
	});

	$("#home").css({'padding-top': $(".header").outerHeight() + 15});

    $(window).resize(function(){
        setHomeHeight();
    });
    $("#home").imagesLoaded(function() {
        setHomeHeight();
    })
};