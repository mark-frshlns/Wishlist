import paypal from 'paypal-checkout';
import {default as API} from './API';
export default {

        render:function(total,itemObj){
            paypal.Button.render({
                env: 'production',
                style: {
                    label: 'checkout',
                    size: 'responsive',
                    shape: 'pill',
                    color: 'blue',
                    
                },
                client: {
                    sandbox: 'AZstMkEIgyiK47bfU1WjkSbxNNLbbgaHiTu-564gElZRliGN2J4bsVqX0RgzGfRMcrzLrm2-uag7iLZN',
                    production:''
                },
                commit: true,
                payment: function( data, actions){
                    
                    return actions.payment.create({
                        payment:{
                            transactions:[{
                                amount: {
                                    total: total,
                                    currency: 'USD'
                                },
                                
                            }]
                        },
                        experience: {
                            input_fields:{
                                no_shipping:1
                            }
                        }

                    });
                },
                onAuthorize: function(data, actions){
                    return actions.payment.get()
                        .then(function(details){
                           
                                    return actions.payment.execute()
                                        .then(function(){
                                            //update database
                                            //show success message
                                            API.updateRecord(itemObj).then(result=>{
                                                if(result.data.msg){
                                                    alert("Thank you for your generous Donation");
                                                    window.location.href = "/WishList"
                                                }
                                            }).catch(err=>console.log(err));
                                            console.log('done');
                                        })
                                })
                        
                }
            }, '#paypal-button');
        }
}
