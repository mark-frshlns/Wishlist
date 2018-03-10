const router = require("express").Router();

const wishlist_controller = require('../../controllers/wishlist/wishlist_controller');

router.route("/additem")
      .post(wishlist_controller.addItem);

router.route("/addcategory")
      .post(wishlist_controller.addCategory);

router.route("/deleteitem/:id")
      .put(wishlist_controller.deleteItem);

router.route("/updateitem/:id")
      .put(wishlist_controller.updateItem);

module.exports = router;
