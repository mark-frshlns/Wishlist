import React from 'react';

const DonateBtn = (props)=>{



    return (


        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="amount" value={props.total} />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="hosted_button_id" value="DBZR5B6A7KMHJ" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>


    )





}

export default DonateBtn;