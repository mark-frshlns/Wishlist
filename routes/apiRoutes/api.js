const router = require('express').Router();
const findAllRoutes = require('./findAllRoutes');
const modifyRoutes = require('./modifyRoutes');

const authRoutes = require('./authRoutes');

router.use("/all", findAllRoutes);
router.use("/modify", modifyRoutes);

router.use("/auth", authRoutes);

module.exports = router;
