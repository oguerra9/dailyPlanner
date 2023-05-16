const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const plannedRoutes = require('./planned-routes');
const planTypeRoutes = require('./planType-routes');
const settingsRoutes = require('./settings-routes');

router.use('/categories', categoryRoutes);
router.use('/planned', plannedRoutes);
router.use('/planTypes', planTypeRoutes);
router.use('/settings', settingsRoutes);

module.exports = router;
