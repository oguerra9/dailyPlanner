const sequelize = require('../config/connection');

const Category = require('../models/Category');
const Planned = require('../models/Planned');
const PlanType = require('../models/PlanType');
const Settings = require('../models/Settings');

const categoryData = require('./categoryData.json');
const plannedData = require('./plannedData');
const planTypeData = require('./planTypeData.json');
const settingsData = require('./settingsData.json');

const seedDatabase = async () => {
    
    await sequelize.sync({ force: true });

    await Category.bulkCreate(categoryData);
    await PlanType.bulkCreate(planTypeData);
    await Planned.bulkCreate(plannedData);
    await Settings.bulkCreate(settingsData);

    process.exit(0);
};

seedDatabase();