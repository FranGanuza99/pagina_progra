$(document).ready(function(){
      $('.slider').slider({
            indicators: true,
            interval: 6000,
            transition: 600,
      });
      $('.slider').slider('pause');
      // Start slider
      $('.slider').slider('start');
      // Next slide
      $('.slider').slider('next');
      // Previous slide
      $('.slider').slider('prev');
        $(".dropdown-button").dropdown();
       $(".button-collapse").sideNav();
       $('.modal').modal();
       $('.materialboxed').materialbox();
       $('.carousel').carousel();
});



