const router = require('express').Router();
const apiRoutes = require('./api');
const weatherRoutes = require('./weather');

router.use('/api', apiRoutes);
router.use('/weather', weatherRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;