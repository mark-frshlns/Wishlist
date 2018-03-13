const jwt = require('jsonwebtoken');
const db = require('../../models');
const bcrypt = require('bcryptjs');
const config = require('../../config');
const verifyToken = require('./verifyToken');
module.exports = {

      Authenticate: function(req, res){
          db.User.findOne({where:{username: req.body.username}}).then(function(err, user){
            if(err) res.status(500).json({msg:"internal error"});

            else if(!user) res.status(404).json({msg:"no user found"});

            else{
                  
                  let isValid = bcrypt.compare(req.body.password, user.password);
                  if(!isValid){
                    res.status(401).json({auth:false, Token:null});
                  }
                  
                  let token = jwt.sign({id:user.id}, config.secret, {
                    expiresIn: 86400
                  });

                  res.status(200).json({auth:true,Token:token});
            }
                  
          })
      },
      checkAuthToken: function(req, res, next){
            if(req.usedId){
              res.status(200).json({auth:true, Token:req.headers['x-access-token']});
            }
            else{
              res.status(401).json({auth:false, Token:null});
            }
            

      }



}