module.exports = function (sequelize, DataTypes) {
  
    var users = sequelize.define("users", {
      
      name: DataTypes.STRING(100),
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(100)
    }, {
      timestamps: false
    }
   
    );
  return users;
};
