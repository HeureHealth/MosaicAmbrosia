jQuery(function($) {
    var mobileMenu = $('#mobile-menu');
    var crossButton = $('#cross-button');
    var menuLabel = $('.wsite-menu-label');
    var menuDefault = $('.wsite-menu-default');

    function fadeOut(el, cb, css) {
    	css = $.extend({
    		visibility: 'hidden',
      		position: 'absolute'
    	}, css);

    	el.fadeTo('slow', 0, function() {
    		$(this).css(css);
    		if (cb) {
    			cb.apply(this, arguments);
    		}
    	});
    }

    function fadeIn(el, cb, css) {
    	css = $.extend({
    		visibility: 'visible',
      		position: 'relative'
    	}, css);

		el.css(css).fadeTo('slow', 1, cb);
    }

    crossButton.on('click', function(e) {
        e.preventDefault();

        fadeOut(menuDefault, function() {
            menuLabel.show();
            fadeIn(mobileMenu, null, { position: '' });
        });

        fadeOut(crossButton);
    });

    mobileMenu.add(menuLabel).on('click', function(e) {
        e.preventDefault();
        menuLabel.hide();
        fadeIn(menuDefault);
        fadeIn(crossButton, null, { position: '' });
        fadeOut(mobileMenu);
    });
});