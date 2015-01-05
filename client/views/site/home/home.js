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

    var func = function() {
        if ($(window).height() - $("#home").height() > 0 && $(window).width() > 768) {
            var homeMinHeight = $(window).height();
            $("#home").css({'min-height': homeMinHeight});
            var maxMarginHeight = ($("#home").outerHeight() - $("#home").height()) / 3

            var onScroll = function() {
                var in_min = 0;
                var in_max = $("#home").height();
                var current = $("#home").height() - $(window).scrollTop();
                var out_min = 0;
                var headerHeight = current.map(in_min, in_max, out_min, maxMarginHeight);
                if (headerHeight > 0 && maxMarginHeight > 0) {
                    $(".header-margin").height(headerHeight - 1);
                }
            }

            $(window).scroll(function() {
                onScroll();
            })

            onScroll();
        }
    }

    $(window).resize(function(){
        func();
    });

    func();
};