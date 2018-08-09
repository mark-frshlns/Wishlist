const db = require('../../models');
const sequelize = require('sequelize');

const jwt = require('jsonwebtoken');
module.exports = {


  findAllItemsCategories: function(req, res){
    

    console.log(req.body);
    const _kkter = jwt.verify(Object.keys(req.body)[0], 'vX5_7@Z<~]^tg(yc');
    if(_kkter.origin){db.Category.findAll({include:[{
      model:db.Item
    }]}).then(function(data){
      if(!data){
        res.status(404).json({msg:"no categories"});

      }
      res.status(200).json(data);
    })}else(res.status(404).json('not authorized'));
  },

  deleteItem: function(req, res){
    if(req.params.id.toString().search(/[^a-zA-Z0-9]/) > -1){
     req.params.id=parseInt(req.params.id.toString.replace(/[^a-zA-Z0-9]/,""));
    }
        if(req.user){db.Item.destroy({where:{id:req.params.id}}).then(num=>{
              res.status(200).json({msg:"deleted",data:num});
        }).catch(err=>{
              res.status(304).json({msg:"can not delete", data:err});
        })}else(res.status(401).json({msg:'unauthorized'}));
  },
  addCategory: function(req, res){
      let data = req.body;
      if(req.user){db.Category.create(data).then(function(result){
        res.status(200).json(result);
      })}else(res.status(401).json({msg:'unauthorized'}));
  },
  addItem: function(req, res, next){
        
        if(req){db.Item.create({
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
                      })}else(res.status(401).json({msg:'unauthorized'}));
  },
  deleteCategory: function(req, res){
    if(req.params.id.toString().search(/[^a-zA-Z0-9]/) > -1){
      req.params.id=parseInt(req.params.id.toString.replace(/[^a-zA-Z0-9]/,""));
     }
    if(req.user){db.Category.destroy({where:{id:req.params.id}}).then(function(result){
      res.status(200).json(result);
    }).catch(err=>{
      res.status(304).json({msg:"Not Deleted",err:err});
    })}else(res.status(401).json({msg:'unauthorized'}));
  },
  updateOnCheckOut: async function(req,res){
      const _kkter = jwt.verify(Object.keys(req.body)[0], 'vX5_7@Z<~]^tg(yc');
      const itemsToUpdate = _kkter.data;
      if(_kkter.origin){
        const results = itemsToUpdate.map(async function(item){
          return {
            id:item.item_id,
            isResolved: await db.Item.update({
              totalFulfilled:sequelize.literal(`totalFulfilled+${item.total_amount-((item.total_amount*2.9/100)+0.3)}`)
            },{where:{id:item.item_id}}).catch(err=>err)
          }
        })
        let flag = results.length ;
        for (let i=0; i<results.length; i++){
                
                
                results[i].then(response=>{
                      if(response.isResolved[0] === 1){
                        
                        flag -= 1;
                      }
                      
                      if(i === results.length-1 && flag === 0){
                        res.status(200).json({msg:true});
                      }else if( i === results.length-1 && flag > 0){
                        res.json({msg:false}).status(304);
                      }
                      
                })
        }
      }
      else{
        res.status(401);
      }
      
      
  }

}