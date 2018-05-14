import axios from 'axios';

export default {
  getAll: function(){
     return axios.get('api/all/wishlist');
  },
  contribute: function(Obj){
     return axios.put('api/modify/updateitemContribute/'+Obj.id,{item_contributed:Obj.item_contributed});
  }
}