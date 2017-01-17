$.fn.hamburger = function(options) {

    var $menu = this;

    var settings = $.extend({
        menuToggleElement: ".menu-hamburger",
    }, options );

    console.log($menu);


    $(settings.menuToggleElement).click(function(){
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            $menu.hide();
        } else {
            $(this).addClass('opened');
            $menu.show();
        }
    });
};
