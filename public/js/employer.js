$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  var dollarAmnt = $("#dollarAmount");
  var jobDesc = $("#jobDescription");
  var jobName = $("#name");
  var category = $("#jobCategory");

  var jobForm = $("form.jobCreate");
  // Adding an event listener for when the form is submitted



  // When the signup button is clicked, we validate the email and password are not blank
  jobForm.on("submit", function (event) {
    event.preventDefault();
    console.log("job form Submitted");
    var newJob = {

      name: jobName.val(),
      category: category.val(),
      description: jobDesc.val(),
      amount: dollarAmnt.val()
    };


    // If we have an email and password, run the signUpUser function
    createJobPost(newJob.name, newJob.category, newJob.description, newJob.amount);
    jobName.val("");
    category.val("");
    jobDesc.val("");
    dollarAmnt.val("");
    console.log("Good User");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createJobPost(name,category,description,amount) {
    $.post("/api/jobs", {
      name: name,
      category: category,
      description: description,
      amount: amount
     
    })
      .then(function (data) {
        window.location.replace(data);
        console.log("test2");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .fail(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
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
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 12
	});
	infoWindow = new google.maps.InfoWindow;

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('We found you, please follow the form to add your job.');
			infoWindow.open(map);
			map.setCenter(pos);
		}, function () {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
	 
	
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}