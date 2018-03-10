const db = require('../../models');
const bcrypt = require('bcrypt');

module.exports = {

      findUser: function(req, res){
            db.User.findById(req.params.id).then(function(err, user){
              if(err){
                res.status(500).json({msg:"internal error"});
              }
              if(!user){
                res.status(404).json({msg:"no user found"});
              }
              res.status(200).json(user);
            })
      },
      createUser: function(req, res){
          let hashedPassword = bcrypt.hashSync(req.body.password, 8);
          db.User.create({
            username: req.body.username,
            password: hashedPassword
          }).then(function(err, user){
            if(err){res.status(500).json({msg:"internal error"})}
            res.status(200).json({msg:"user created"});
          })
      },
      deleteUser: function(req, res){

      }
}