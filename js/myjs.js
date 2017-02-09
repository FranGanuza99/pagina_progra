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


      $(".button-collapse").sideNav();

      $(".dropdown-button").dropdown();


      $('.parallax').parallax();
      
});


function initMap() {
      var myLatLng = {lat: 13.723079, lng: -89.2047473};

      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 17,
      });

      // Create a marker and set its position.
      var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Hello World!'
      });
}

