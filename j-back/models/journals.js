"use strict";
module.exports = (sequelize, DataTypes) => {
  const journals = sequelize.define(
    "Journals",
    {
      title: DataTypes.STRING,
      createAt: DataTypes.DATE,
      content: DataTypes.STRING
    },
    {}
  );
  journals.associate = function(models) {
    // associations can be defined here
  };
  return journals;
};
