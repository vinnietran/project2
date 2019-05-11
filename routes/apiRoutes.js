// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //the 404 error is thrown when the user tries to create an exsisting user

    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the home page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/home");
  });


  
  app.put("/api/jobs", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.jobs.update({
      recievedResponse: req.body.recievedResponse
  
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbjobs) {
      res.json(dbjobs);
    });
  });



  app.get("/api/jobs", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.jobs.findAll({}).then(function(dbjobs) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbjobs);
    });
  });

  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.users.findAll({}).then(function(dbusers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbusers);
    });
  });

  app.get("/api/:category?", function(req, res) {
    if (req.params.category) {
      // Display the JSON for ONLY that character.

      db.jobs
        .findAll({
          where: {
            category: req.params.category
          }
        })
        .then(function(result) {
          return res.json(result);
        });
    } else {
      db.jobs.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.users
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });
  app.post("/api/jobs", function(req, res) {
    console.log(req.body);
    db.jobs
      .create({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        amount: req.body.amount,
        zipcode: req.body.zipcode,
        date: req.body.date,
        time: req.body.time
      })
      .then(function() {
        res.redirect(307, "/");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  app.post("/api/recievedButton", function(req, res) {
    console.log(req.body);
    db.jobs
      .update({
        recievedResponse: req.body.name
      })
      .then(function() {
        res.redirect(307, "/");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.users) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.users.name,
        email: req.users.email,
        id: req.users.id
      });
    }
  });
};



// var db = require("../models");
// var passport = require("../config/passport");
// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/users/", function(req, res) {
//     db.users.findAll({})
//       .then(function(dbusers) {
//         res.json(dbusers);
//       });
//   });

//   // POST route for saving a new post
//   app.post("/users", function(req, res) {
//     console.log(req.body);
//     db.users.create({
//       name: req.body.name,
//       email: req.body.body,
//       password: req.body.password
//     })
//       .then(function(dbusers) {
//         res.json(dbusers);
//       });
//   });

// // DELETE route for deleting posts
// app.delete("/api/posts/:id", function(req, res) {
//   db.Post.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
// });

// // PUT route for updating posts
// app.put("/api/posts", function(req, res) {
//   db.Post.update(req.body,
//     {
//       where: {
//         id: req.body.id
//       }
//     })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
// });
