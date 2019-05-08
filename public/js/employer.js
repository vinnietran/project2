$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var dollarAmnt = $("#dollarAmount");
  var jobDesc = $("#job");
  var category = $("#job-type");
  var jobForm = $("#job-form");
  // Adding an event listener for when the form is submitted
  $(jobForm).on("submit", function(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!category.val().trim() || !jobDesc.val().trim() || !dollarAmnt.val()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newJob = {
      category: category.val(),
      description: jobDesc.val().trim(),
      amount: dollarAmnt.val().trim()
    };
    submitJob(newJob);
    console.log("IT FUCKING SUBMITTED");
    console.log(newJob);
  });
  function submitJob(job) {
    $.post("/api/jobs", job, function() {
      //window.location.href = "/blog";
    });
  }
});
