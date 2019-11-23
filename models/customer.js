
const bcrypt = require("bcrypt");


validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customerFname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    customerLname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    customerAddress: {
      type: DataTypes.STRING
    },
    customerCity: {
      type: DataTypes.STRING
    },
    customerState: {
      type: DataTypes.STRING
    },
    customerZipcode: {
      type: DataTypes.STRING
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    customerPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1] 
      }
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

  return Customer;
};