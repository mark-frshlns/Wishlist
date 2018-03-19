const db = require('../../models');

module.exports = {

  findAllItems: function(req, res){
        db.Item.findAll({}).then(function(data){
          if(!data){
            res.status(404).json({msg:"no items found"});
          }
          
          res.status(200).json(data);
        })
  },
  findAllCategories: function(req,res){
      db.Category.findAll({}).then(function(data){
        if(!data){
          res.status(404).json({msg:"no categories"});

        }
        res.status(200).json(data);
      })
  },
  findAllItemsCategories: function(req, res){
    db.Category.findAll({include:[{
      model:db.Item
    }]}).then(function(data){
      if(!data){
        res.status(404).json({msg:"no categories"});

      }
      res.status(200).json(data);
    })
  },

  findByCategoryId: function(req, res){

  },
  updateItem: function(req, res){
            let id = req.params.id;
            let data = req.body;
            db.Item.update(data,{where:{id:id}}).then(function(item){
                console.log(item);
                db.Item.findOne({where:{id:id}}).then(result=>{
                  res.status(200).json(result);
                })
            }).catch(function(err){

            })
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