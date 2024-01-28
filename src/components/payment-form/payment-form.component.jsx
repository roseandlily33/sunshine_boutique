import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {PaymentContainer} from './payment-form.styles';
import { useState } from "react";
import { useSelector } from "react-redux";
import {selectCartTotal} from '../../store/cart/cart.selector';
import {selectCurrentUser} from '../../store/user/user.selector';
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setProcessingPayment]= useState(false);



    const paymentHandler = async(e) => {
        console.log('Making a payment request')
        e.preventDefault();
        setProcessingPayment(true);
        if(!stripe || !elements){
            return;
        }
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res =>  res.json());
        const {paymentIntent: {client_secret}} = response;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser || 'Test User'
                }
            }
        });
        setProcessingPayment(false);
        if(paymentResult.error){
            alert("There was an error")
        } else {
            if(paymentResult.paymentIntent.status == 'succeeded'){
                alert('Payment Was Sucessful')
            }
        }
    }
    return ( 
        <PaymentContainer >
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <button disabled={isProcessingPayment} onClick={paymentHandler}>Pay Now</button>
        </PaymentContainer>
     );
}
 
export default PaymentForm;