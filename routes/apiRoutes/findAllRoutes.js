const router = require("express").Router();

const wishlist_controller = require('../../controllers/wishlist/wishlist_controller');

router.route('/categories')
      .get(wishlist_controller.findAllCategories);

router.route('/items')
      .get(wishlist_controller.findAllItems);

router.route('/wishlist')
      .get(wishlist_controller.findAllItemsCategories);

module.exports = router;