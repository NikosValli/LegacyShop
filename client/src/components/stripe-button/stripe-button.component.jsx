import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price}) => {
    const priceForStripe=price*100;
    const publishableKey='pk_test_8BvaI80CmDeQDUfNiA4Lfiph00dgsQXfBe';

    const onToken=token =>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response =>{
            alert('Payment successful');

        }).catch(error=>{

            console.log("Payment error..",JSON.parse(error));
            alert(
                "there was an issue with the payment!"
            );
        })

        
    };
    return(
<StripeCheckout
label='Pay now'
name='Leagcy Clothing'
billingAddress
shippingAddress
description={`Your total is $${price}`}
amount={priceForStripe}
panelLabel='Pay Now'
token={onToken}
stripeKey={publishableKey}




/>
 );
};

export default StripeCheckoutButton;