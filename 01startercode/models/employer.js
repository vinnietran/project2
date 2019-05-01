module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    name: DataTypes.STRING,
  });
  Employer.associate = function(models) {
    // Associating Employer with Posts
    // When an Employer is deleted, also delete any associated Posts
    Employer.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Employer;
};
