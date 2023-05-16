const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class PlanType extends Model {}

PlanType.init(
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    planType_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'planType',
  }
);

module.exports = PlanType;
