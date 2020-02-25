module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: "Users"
    }
  );
  user.associate = function(models) {
    // user.hasMany(models.Journals);
  };

  return user;
};
