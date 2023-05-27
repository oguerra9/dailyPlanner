const Date = require('../utils/dateMethods');

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Planned extends Model {}

Planned.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    planned_date: {
      type: DataTypes.DATE,
      defaultValue: ((new Date()).getMidday())
    },
    planned_time: {
      type: DataTypes.STRING,
      defaultValue: "00:00"
    },
    planned_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    planned_am: {
      type: DataTypes.BOOLEAN,
    },
    planned_description: {
        type: DataTypes.STRING,
    },
    category_id: {
        type: DataTypes.INTEGER,
        defaultValue: 4,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    planType_id: {
        type: DataTypes.INTEGER,
        defaultValue: 4,
        references: {
            model: 'planType',
            key: 'id'
        }
    },
    planned_active: {
      type: DataTypes.BOOLEAN,
      default: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'planned',
  }
);

module.exports = Planned;
