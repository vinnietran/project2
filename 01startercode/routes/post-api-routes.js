// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// Dependencies
// Grabbing our models

var db = require("../models");

// Routes
module.exports = function (app) {

  // GET route for getting all of the employers
  app.get("/api/employers", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employer.findAll({
      include: [db.Post]
    }).then(function (dbEmployer) {
      // We have access to the employers as an argument inside of the callback function
      res.json(dbEmployer);
    });
  });
  app.get("/api/employers/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbEmployer) {
      res.json(dbEmployer);
    });
  });

  // POST route for saving a new Employer. You can create a Employer using the data on req.body
  app.post("/api/employers", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Employer.create(req.body).then(function (dbEmployer) {
      // We have access to the new Employer as an argument inside of the callback function
      res.json(dbEmployer);
    });
  });

  // DELETE route for deleting employers. You can access the Employer's id in req.params.id
  app.delete("/api/employers/:id", function (req, res) {
    db.Employer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbEmployer) {
      // We have access to the new Employer as an argument inside of the callback function
      res.json(dbEmployer);
    });
  });

  // PUT route for updating employers. The updated Employer will be available in req.body
  app.put("/api/employers", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Employer.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbEmployer) {
        res.json(dbEmployer);
      });
  });
};
