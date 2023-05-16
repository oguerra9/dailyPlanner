const Planned = require('./Planned');
const Category = require('./Category');
const PlanType = require('./PlanType');
const Settings = require('./Settings');

Planned.belongsTo(Category, {
  foreignKey: 'category_id',
});

Planned.belongsTo(PlanType, {
    foreignKey: 'planType_id',
});

Category.hasMany(Planned, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

PlanType.hasMany(Planned, {
    foreignKey: 'planType_id',
    onDelete: 'CASCADE'
});


module.exports = {
  Planned,
  Category,
  PlanType,
};
