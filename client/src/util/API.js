import axios from 'axios';

import {default as jwt} from 'jsonwebtoken';

export default {
  getAll: function(){
     const _kkter = jwt.sign({origin:true},'vX5_7@Z<~]^tg(yc');
     
     return axios.post('api/all/wishlist', _kkter);
  },
 
  addCategory: function(catName){
    return axios.post('api/modify/addcategory', catName);
  },
  addItem: function(itemObj){
 
      return axios.post('api/modify/additem', itemObj);
   
    
  },
  deleteItem: function(id){
    return axios.put(`api/modify//deleteitem/${id}`);
  },
  deleteCategory: function(id){
    return axios.put(`api/modify/deletecategory/${id}`);
  },
  updateRecord: function(data){
    
    data['origin'] = true;
    const _kkter = jwt.sign(data,'vX5_7@Z<~]^tg(yc');
     
    return axios.put('api/modify/update/',_kkter);
  }
}