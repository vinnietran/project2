var db = require("../models");

module.exports = function(app) {
  app.get("/api/employers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employer.findAll({
      include: [db.Post]
    }).then(function(dbEmployer) {
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

  app.post("/api/employers", function(req, res) {
    db.Employer.create(req.body).then(function(dbEmployer) {
      res.json(dbEmployer);
    });
  });

  app.delete("/api/employers/:id", function(req, res) {
    db.Employer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployer) {
      res.json(dbEmployer);
    });
  });

};
