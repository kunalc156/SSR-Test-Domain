const router = require('express').Router();
const pageRoutes = require('./routes');

router.use('/', pageRoutes);

module.exports = router;
