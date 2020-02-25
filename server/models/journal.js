"use strict";
module.exports = (sequelize, DataTypes) => {
  const journal = sequelize.define(
    "Journal",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      content: DataTypes.STRING
    },
    {}
  );
  journal.associate = function(models) {
    // associations can be defined here
    // journal.belongsTo(models.Journal);
  };
  return journal;
};
