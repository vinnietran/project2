var db = require("../models");

var isAuthenticated = require("../config/isAuth.js")

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.users.findAll({}).then(function(dbusers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbusers
      });
    });
  });

  app.get("/home", isAuthenticated, function(req, res) {
    db.users.findAll({}).then(function(dbusers) {
      res.render("home");
    });
  });

  app.get("/employer", isAuthenticated, function(req, res) {
    db.users.findAll({}).then(function(dbusers) {
      res.render("employer");
    });
  });

  app.get("/employee", isAuthenticated, function(req, res) {
    db.users.findAll({}).then(function(dbusers) {
      res.render("employee");
    });
  });

  // Load example page and pass in an example by id
  app.get("/users/:id", function(req, res) {
    db.users.findOne({ where: { id: req.params.id } }).then(function(dbusers) {
      res.render("users", {
        users: dbusers
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
