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

    //Defeat spambots

    var email1 = "info";
    var email2 = "@";
    var email3 = "instantministorage.com";
    var email4 = email1 + email2 + email3;
    $('.send-now').html("<a class='send-now' href=" + "mail" + "to:" + email1 + email2 + email3 + ">Email Us</a>");
    $('.email-address').html(email4);
 
});