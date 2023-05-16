const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Settings extends Model {}

Settings.init(
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timezone_name: {
        type: DataTypes.STRING,
        default: 'EST'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'settings',
  }
);

module.exports = Settings;
