const Planned = require('./Planned');
const Category = require('./Category');
const PlannedCategory = require('./PlannedCategory');
const PlannedPlanType = require('./PlannedPlanType');
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

Planned.belongsToOne(Category, { through: PlannedCategory })

Planned.belongsToOne(PlanType, { through: PlannedPlanType })

Category.belongsToMany(Planned, { through: PlannedCategory })

PlanType.belongsToMany(Planned, { through: PlannedPlanType })


module.exports = {
  Planned,
  Category,
  PlanType,
  PlannedCategory,
  PlannedPlanType,
};
