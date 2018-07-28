const db = require('../../models');
const sequelize = require('sequelize');

function verifyInventory(items,cb){
   let result;
    db.Item.findAll({where:{id:items}}).then((dataSet)=>{
      console.log(dataSet[0].dataValues.payment_Percentage);
            result = dataSet.every(row=>{
              console.log(row);
               return row.dataValues.payment_Percentage <= 100;
            })
            console.log(result);
            cb(result);
     }).catch(err=>{})

  
}
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
  updateItemRequest: function(req, res){
      let id = req.params.id;
      let data = req.body.item_requested;
      db.Item.update({item_requested:data},{where:{id:id}}).then(result=>{
              res.status(200).json({msg:"updated"})
      }).catch(err=>{

      })
  },
  updateItemContribute: function(req, res){
            let id = req.params.id;
            let data = req.body.item_contributed;
            console.log(data);
            db.Item.findOne({where:{id:id}}).then(item=>{
              console.log(item);
                if(data > item.dataValues.item_requsted){
                  res.status(301).json({msg:"greater than inventory"});
                }else{
                  db.Item.update({item_requested:item.item_requested-data,
                                  },{
                                    where:{id:id},returning:true
                                  })
                  .then((updatedItem)=>{
                    console.log(updatedItem);
                      res.status(200).json(updatedItem);
                  })
                  .catch(err=>{
                    console.log(err);
                    res.status(500);
                  })
                }
            }).catch(err=>{
              console.log(err);
              res.status(500);
            })
  },
  deleteItem: function(req, res){
        db.Item.destroy({where:{id:req.params.id}}).then(num=>{
              res.status(200).json({msg:"deleted",data:num});
        }).catch(err=>{
              res.status(304).json({msg:"can not delete", data:err});
        })
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
  },

}