const router = require('express').Router();
const path = require('path');
router.get("/", function(req,res){

    res.sendFile(path.join(__root, "client/build/index.html"));

});

module.exports = router;