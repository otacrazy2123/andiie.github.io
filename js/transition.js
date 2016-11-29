jQuery(document).ready(function($){

  Materialize.showStaggeredList = function(selectorOrEl) {

  	setTimeout(function(){
			
    var element;
    
    element = $(selectorOrEl);
   
    var time = 0;
    element.find('li').velocity(
        { translateX: "-100px"},
        { duration: 0 });

    element.find('li').each(function() {
      $(this).velocity(
        { opacity: "1", translateX: "0"},
        { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });

	},4000);
   
  };
});