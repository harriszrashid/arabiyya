!function($){Drupal.behaviors.arabiyyaSlider={attach:function(i,e){$(".flexslider").flexslider({animation:"slide",easing:"swing",slideshow:!1,start:function(i){$(".total-slides").text(i.count)},after:function(i){$(".current-slide").text(i.currentSlide)}})}}}(jQuery),function($){Drupal.behaviors.arabiyyaShowHide={attach:function(i,e){$(".flexslider li .views-field.views-field-title-field-1 h2"),$(".flexslider li .views-field h2").click(function(i){$(this).fadeTo(300,0).css("display","none");var e=$(this).parent().next().find("h2");$(this).parent().hasClass("views-field-title")?$(this).parent().parent().find(".views-field:first-child h2").fadeTo(300,1).css("display","block"):e.stop().fadeTo(300,1).css("display","block"),i.preventDefault()})}}}(jQuery);