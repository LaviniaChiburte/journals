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
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING, //integers?
        allowNull: false,
        validate: {
          notEmpty: true,
          isAlphanumeric: true
        }
      }
    },
    {
      tableName: "Users"
    }
  );
  user.associate = function(models) {
    user.hasMany(models.Journal);
  };

  return user;
};
