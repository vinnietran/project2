//given
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//jobs modal


//*******date
$(document).ready(function(){
  $('.modal').modal();
});

// $(document).ready(function () {
//   //MAKE SURE YOU CALL .leanModal METHOD THIS WAY.
//   //ELSE MODAL MAP WILL NOT SHOW PROPERLY.
//     $('.modal-trigger').leanModal({
//         ready: function () {
//             var map2 = document.getElementById("map");
//             google.maps.event.trigger(map2, 'resize');
//         }
//     });
// });
     


//*******time



//******carousel 


// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});
    
$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function () {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
  });

  $(window).scroll(function () {
      $(".slideanim").each(function () {
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
              $(this).addClass("slide");
          }
      });
  });

})


// Or with jQuery

$(document).ready(function(){
  $('select').formSelect();
});