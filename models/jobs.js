module.exports = function(sequelize, DataTypes) {
  var jobs = sequelize.define("jobs", {

    

    name: {

      type: DataTypes.STRING,
      allowNull:false
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false
    },

    date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: false
    },
    

   zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }

    // }
  });
  // jobs.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   jobs.belongsTo(models.user, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  
  return jobs;
};
