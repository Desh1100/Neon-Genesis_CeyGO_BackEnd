const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "your-rds-endpoint",
  dialect: "mysql", // or 'postgres'
});

const Place = sequelize.define("Place", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Place;
