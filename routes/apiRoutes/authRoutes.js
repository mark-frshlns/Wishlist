const router = require('express').Router();

const auth_controller = require('../../controllers/auth/authenticated');
const passport = require('../../config/passport');
const logout = require('../../controllers/auth/logout');
router.use("/login",passport.authenticate('local'))
       router.post("/login",auth_controller);

router.get("/logout", logout);
       

module.exports = router;