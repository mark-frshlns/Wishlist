const router = require("express").Router();

const user_controller = require("../../controllers/wishlist/user_controllers");

router.route("/find")
      .get(user_controller.findUser);

router.route("/create")
      .post(user_controller.createUser);

module.exports = router;