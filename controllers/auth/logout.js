module.exports = function(req,res){
    req.logout();
    res.json({msg:false}).status(200);
}