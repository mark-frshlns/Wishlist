import {client, hostedFields} from 'braintree-web';

export default {

        establish: function (){
          return client.create({
            authorization: "sandbox_nnkfk9zc_myq9z8hb4r726rkt"  
          })
        },

        createHostedFields: function(clientInstance){
            
        }


}
