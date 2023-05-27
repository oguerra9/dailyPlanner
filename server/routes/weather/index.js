const router = require('express').Router();
const currentRoutes = require('./current-routes');
const forecastRoutes = require('./forecast-routes');

router.use('/current', currentRoutes);
router.use('/forecast', forecastRoutes);

module.exports = router;