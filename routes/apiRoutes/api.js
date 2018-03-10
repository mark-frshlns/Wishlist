const router = require('express').Router();
const findAllRoutes = require('./findAllRoutes');
const modifyRoutes = require('./modifyRoutes');

router.use("/all", findAllRoutes);
router.use("/modify", modifyRoutes);

module.exports = router;
