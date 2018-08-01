
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
      destination:function(req,file,cb){
            cb(null, './uploads/');
      },
      filename: function(req,file, cb){
            cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname));
      }
})

const upload = multer({storage:storage});

const wishlist_controller = require('../../controllers/wishlist/wishlist_controller');

router.route("/additem")
      .post(upload.single('item_image'), wishlist_controller.addItem);

router.route("/addcategory")
      .post(wishlist_controller.addCategory);

router.route("/deletecategory/:id")
      .put(wishlist_controller.deleteCategory);
      
router.route("/deleteitem/:id")
      .put(wishlist_controller.deleteItem);

router.route("/updateitemContribute/:id")
      .put(wishlist_controller.updateItemContribute);
router.route("/updateitemRequest/:id")
      .put(wishlist_controller.updateItemRequest);
module.exports = router;
