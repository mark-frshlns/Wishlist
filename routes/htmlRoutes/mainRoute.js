const express = require('express');
const router = express.Router();
const path = require('path');
router.use('/uploads', express.static('uploads'));
router.get("/*", function(req,res){

    res.sendFile(path.join(global.__root, "client/build/index.html"));

});

module.exports = router;