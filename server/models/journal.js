"use strict";
module.exports = (sequelize, DataTypes) => {
  const journal = sequelize.define("Journal", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    title: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    content: DataTypes.STRING,
    id_user: {
      type: DataTypes.INTEGER,
      defaultValue: 9
    }
  });
  journal.associate = function(models) {
    journal.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
  };
  return journal;
};
