const router = require("express").Router();
const wishlist_controller = require('../../controllers/wishlist/wishlist_controller');

router.route('/checkout', wishlist_controller.checkout);

module.exports = router;