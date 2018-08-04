const db = require('../../models');
const sequelize = require('sequelize');
const fs = require('fs');

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
  updateItemRequest: function(req, res){
      let id = req.params.id;
      let data = req.body.item_requested;
      db.Item.update({item_requested:data},{where:{id:id}}).then(result=>{
              res.status(200).json({msg:"updated"})
      }).catch(err=>{

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
  addItem: function(req, res, next){
      console.log(req.file);
        db.Item.create({
                          item_name:req.body.item_name,
                          item_description:req.body.item_description,
                          item_price:req.body.item_price,
                          item_requested:req.body.item_requested,
                          CategoryId:req.body.CategoryId,
                          item_imageUrl:req.file.path || req.body.item_imageUrl  
                        }).then(function(result){
                                   res.status(200).json(result);
                      }).catch(err=>{
                        console.log(err);
                      })
  },
  deleteCategory: function(req, res){
    db.Category.destroy({where:{id:req.params.id}}).then(function(result){
      res.status(200).json(result);
    }).catch(err=>{
      res.status(304).json({msg:"Not Deleted",err:err});
    })
  },
  updateOnCheckOut: async function(req,res){
      const itemsToUpdate = req.body.data;
      const results = itemsToUpdate.map(async function(item){
        return {
          id:item.item_id,
          isResolved: await db.Item.update({
            totalFulfilled:sequelize.literal(`totalFulfilled+${item.total_amount}`)
          },{where:{id:item.item_id}}).catch(err=>err)
        }
      })
      let flag = results.length ;
      for (let i=0; i<results.length; i++){
              
              console.log(flag);
              results[i].then(response=>{
                    if(response.isResolved[0] === 1){
                      console.log(response)
                      flag -= 1;
                    }
                    
                    if(i === results.length-1 && flag === 0){
                      res.status(200).json({msg:true});
                    }else if( i === results.length-1 && flag > 0){
                      res.json({msg:false}).status(304);
                    }
                    console.log(flag);
              })
      }
      
  }

}