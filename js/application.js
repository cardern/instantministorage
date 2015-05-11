$(document).ready(function() {
 
  $("#intro-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      autoPlay:true,
      mouseDrag:false,
      touchDrag:false,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});