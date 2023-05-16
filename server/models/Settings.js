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
    setting_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    setting_value: {
        type: DataTypes.STRING,
        allowNull: false
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
