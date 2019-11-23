
const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    pname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pdescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pimage: {
      type: DataTypes.BLOB
    },
    pcategory: {
      type: DataTypes.STRING
    },
    pprice: {
      type: DataTypes.INTEGER
    },
    plabel:{
      type: DataTypes.STRING
    },
    blockeddate: {
      type: DataTypes.STRING
    },
 
  });

  // Customer.associate = function (models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Employee.belongsTo(models.Employer, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //   Employee.hasMany(models.TimeSheet, {
  //     onDelete: "cascade"
  //   });
  // };

  return Product;
};