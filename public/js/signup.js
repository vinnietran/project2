

$(document).ready(function() {


 // Getting jQuery references to the post body, title, form, and category select
 var nameInput = $("#createName");
 var emailInput = $("#createEmail");
 var passwordInput = $("#CreatePassword");
 var userForm = $("#userCreateForm");

 
  // When the signup button is clicked, we validate the email and password are not blank
  userForm.on("submit", function(event) {
    event.preventDefault();
    var users= {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!users.email || !users.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(users.email, users.password);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name,email, password) {
    $.post("/api/signup", {
      name: name,
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
