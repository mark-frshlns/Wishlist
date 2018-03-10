const router = require('express').Router();
const verifyToken = require('../../controllers/auth/verifyToken');
const auth_controller = require('../../controllers/auth/authenticate');

router.route("/login")
      .post(auth_controller.Authenticate);

router.use("/", verifyToken);
router.route("/")
      .get(auth_controller.checkAuthToken);

module.exports = router;