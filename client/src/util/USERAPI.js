import axios from 'axios';
// import bcrypt from 'bcryptjs';

export default {

      login: function(username, password){
            const data = {username,password};
            return axios.post('/api/auth/login', data);
      },
      createUserAccount: function(username, password){
            const data = {username,password};
            return axios.post('api/user/create', data);
      },
      isSignedIn: function (){

            return axios.get('/api/auth/');
      }

}