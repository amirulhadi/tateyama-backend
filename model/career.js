'use strict';
module.exports = (sequelize, DataTypes) => {
  const resume = sequelize.define('career', {
    fullname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    filename: DataTypes.STRING,
    url: DataTypes.STRING,
    feedback: DataTypes.STRING
  }, {
    tableName: 'resume'
  });
  resume.associate = function (models) {
    // associations can be defined here
  };
  return resume;
};