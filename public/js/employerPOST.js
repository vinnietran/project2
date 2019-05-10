
//  /////////////////// COde for POSt

$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select
    var dollarAmnt = $("#dollarAmount");
    var jobDesc = $("#jobDescription");
    var jobName = $("#name");
    var category = $("#jobCategory");
    var zipcode = $("#zipcode");
    var date = $("#date");
    var time = $("#time");
  
  
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
        amount: dollarAmnt.val(),
        zipcode: zipcode.val(),
        date: date.val(),
        time: time.val()
      };
  
  
      // If we have an email and password, run the signUpUser function
      createJobPost(newJob.name, newJob.category, newJob.description, newJob.amount, newJob.zipcode, newJob.date, newJob.time);
      jobName.val("");
      category.val("");
      jobDesc.val("");
      dollarAmnt.val("");
      zipcode.val("");
      date.val("");
      time.val("");
      console.log("Good User");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createJobPost(name,category,description,amount, zipcode, date, time) {
      $.post("/api/jobs", {
        name: name,
        category: category,
        description: description,
        amount: amount,
        zipcode: zipcode,
        data: date,
        time: time
       
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
  
  
  
  
  
  