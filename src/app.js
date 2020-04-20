$(window).on("scroll", function(){
      if ($(this).scrollTop() > 100) {
          $("nav").addClass("fixed_nav");
      } else {
          $("nav").removeClass("fixed_nav");
      }
});