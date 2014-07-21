//Custom Flexslider
(function($) {
  Drupal.behaviors.arabiyyaSlider = {
    attach: function(context, settings) {
      $(".flexslider").flexslider({
        animation: "slide",
        easing: "swing",
        slideshow: false,
        start: function(slider) {
            $('.total-slides').text(slider.count);
          },
          after: function(slider) {
            $('.current-slide').text(slider.currentSlide);
          }
      });
    }
  };
})(jQuery);

//Show Hide
(function($) {
  Drupal.behaviors.arabiyyaShowHide = {
    attach: function(context, settings) {
      $(".flexslider li .views-field h2").click(function(e) {
        $(this).fadeTo(100, 0).css("display", "none");
        var $next = $(this).parent().next().find("h2");

        if($(this).parent().hasClass('views-field-title')){
          //alert('hey');
          $(this).parent().parent().find(".views-field:first-child h2").fadeTo(300, 1).css("display", "block");
        }
        else {
          $next.stop().fadeTo(300, 1).css("display", "block");
        }
        e.preventDefault();
      });
    }
  };
})(jQuery);
