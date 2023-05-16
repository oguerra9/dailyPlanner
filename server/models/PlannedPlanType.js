const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PlannedPlanType extends Model {}

PlannedPlanType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true, 
      autoIncrement: true
    },
    planned_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Planned',
        key: 'id'
      }
    },
    planType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'PlanType',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'planned_planType',
  }
);

module.exports = PlannedPlanType;