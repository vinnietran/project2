// for google map api

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

$("#search-btn").on("click", function () {
    // save the character they typed into the character-search input
    var searchedCategory = $("#category-search")
      .val()
      .trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html


    // run an AJAX GET-request for our servers api,
    // including the user's character in the url
    $.get("/api/" + searchedCategory, function (data) {
      // log the data to our console
      console.log(data);
      console.log(name);
      // empty to well-section before adding new content
      $("#well-section").empty();
      // if the data is not there, then return an error message
      if (!data) {
        $("#well-section").append("<h2> No data found. </h2>");
      }
      else {
        // otherwise

        console.log("test if else works");

        for (var i = 0; i < data.length; i++) {
          var newRow = $("<tr>").append(
            $("<td>").text(data[i].name),
            $("<td>").text(data[i].category),
            $("<td>").text(data[i].description),
            $("<td>").text(data[i].date),
            $("<td>").text(data[i].time),
            $("<td>").text("$" + data[i].amount),
            $("<td>").append("<button id='selectJob' " + "class='selectJob'" + "class='btn-large'> " + "Select this Job! " + "</button>")
          );
          $("#jobtable").append(newRow);
          console.log(data);
        }


      }
    });
  });