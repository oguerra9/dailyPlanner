const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PlannedCategory extends Model {}

PlannedCategory.init(
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
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'planned_category',
  }
);

module.exports = PlannedCategory;
