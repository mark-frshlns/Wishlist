module.exports = function(req, res, next){
    
    if(req.user){
        res.status(200).json({msg:true});
    }
    else{
        res.json({msg:false});
    }
}