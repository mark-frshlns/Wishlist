const db = require('../../models');

module.exports = {

  findAllItems: function(req, res){
        db.Item.findAll({include:[{
          model: db.Category,
        }]}).then(function(data){
          if(!data){
            res.status(404).json({msg:"no items found"});
          }
          
          res.status(200).json(data);
        })
  },
  findAllCategories: function(req,res){
      db.Category.findAll({include:[{
        model:db.Item,
      }]}).then(function(data){
        if(!data){
          res.status(404).json({msg:"no categories"});

        }
        res.status(200).json(data);
      })
  },
  findAllItemsCategories: function(req, res){
      
  },

  findByCategory: function(req, res){

  },
  updateItem: function(req, res){

  },
  deleteItem: function(req, res){

  },
  addCategory: function(req, res){
      let data = req.body;
      db.Category.create(data).then(function(result){
        res.status(200).json(result);
      })
  },
  addItem: function(req, res){
        let data = req.body;
        db.Item.create(data).then(function(result){
           res.status(200).json(result);
        })
  }

}