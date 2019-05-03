var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbusers) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  
  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.users.destroy({ where: { id: req.params.id } }).then(function(dbusers) {
      res.json(dbusers);
    });
  });
};

