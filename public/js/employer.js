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
