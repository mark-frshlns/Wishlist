const router = require("express").Router();

const wishlist_controller = require('../../controllers/wishlist/wishlist_controller');


router.route('/wishlist')
      .post(wishlist_controller.findAllItemsCategories);

module.exports = router;