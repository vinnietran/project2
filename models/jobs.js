module.exports = function(sequelize, DataTypes) {
  var jobs = sequelize.define("jobs", {
    // The email cannot be null, and must be a proper email before creation
    //name: DataTypes.STRING(100),
    // postedby: {
    //   type: DataTypes.STRING,
    //   //allowNull: false
    // },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // isaccepted: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false
    // },
    acceptedby: {
      //FK of USERS.id
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    iscomplete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
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
