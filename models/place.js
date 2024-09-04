const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(require("../config/config.json").development);

const Place = sequelize.define(
  "Place",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "places", // Name of your table
    timestamps: false, // If you don't have createdAt/updatedAt fields
  }
);

module.exports = Place;
