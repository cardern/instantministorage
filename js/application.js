$(document).ready(function() {
 
  $("#intro-carousel").owlCarousel({
 
      navigation:false, // Hide next and prev buttons
      autoplay:true,
      autoplaySpeed:3000,
      mouseDrag:false,
      touchDrag:false,
      autoWidth:true,
      loop:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});