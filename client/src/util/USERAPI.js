import axios from 'axios';


export default {

      login: function(username, password){
            const data = {username,password};
            
            return axios.post('api/auth/login', data);
      },
      logout: function(){
           return axios.get('api/auth/logout');
      }
}