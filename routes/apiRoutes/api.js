const router = require('express').Router();
const findAllRoutes = require('./findAllRoutes');
const modifyRoutes = require('./modifyRoutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

router.use("/all", findAllRoutes);
router.use("/modify", modifyRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
