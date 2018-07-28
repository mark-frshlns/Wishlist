import axios from 'axios';

export default {
  getAll: function(){
     return axios.get('api/all/wishlist');
  },
  contribute: function(Obj){
     return axios.post('api/Btree/checkout/',Obj);
  },
  addCategory: function(catName){
    return axios.post('api/modify/addcategory', catName);
  },
  addItem: function(itemObj){
    return axios.post('api/modify/additem', itemObj);
  },
  deleteItem: function(id){
    return axios.put(`api/modify//deleteitem/${id}`);
  }
}