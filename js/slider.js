$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
  	  autoWidth:true,
  	  autoHeight:false,
      items:1,
      singleItem:true
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
});