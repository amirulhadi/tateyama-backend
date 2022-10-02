'use strict';
module.exports = (sequelize, DataTypes) => {
  const contactForm = sequelize.define('contact', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {
    tableName: 'contactForm'
  });
  contactForm.associate = function (models) {
    // associations can be defined here
  };
  return contactForm;
};