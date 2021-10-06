import React from 'react'
import config from '../../config'

function loadRazorpay(src){
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.src = src;
        document.body.append(script);
        script.onload = resolve(true);
        script.onerror = reject(false);
    })
}

async function getOrderId(amount,currency){
    return fetch(`${config.BACKEND_ORIGIN}/razorpay/create_order_of/${amount}/${currency}`).then(res=>res.json()).then(data=>data);
}

async function displayPaymentPortal(e,amount,currency){
    e.preventDefault();
    try{
        let isScriptLoaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
        if(isScriptLoaded){
            //send req
            let order = await getOrderId(amount,currency);
            if(order){
                let options = {
                    "key": config.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                    "amount": order.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": order.currency,
                    "name": config.COMPANY_NAME,
                    "description": "Test Transaction",
                    // "image": "https://example.com/your_logo",
                    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
                    "handler": function (response){
                        console.log({
                            status:"Payment Successful",
                            name:order.amount,
                            response
                        })
                        // alert(response.razorpay_payment_id);
                        // alert(response.razorpay_order_id);
                        // alert(response.razorpay_signature)
                    },
                    "prefill": {
                        "name": "Gaurav Kumar",
                        "email": "gaurav.kumar@example.com",
                        "contact":"999999999",
                        "method": "card",
                        "card[name]": "Gaurav Kumar",
                        "card[number]": "5267 3181 8797 5449",
                        "card[expiry]": "12/25",
                        "card[cvv]": "123"
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.on('payment.failed', function (response){
                    console.log({
                        status:"Payment Failed",
                        name:order.amount,
                        response
                    })
                    // alert(response.error.code);
                    // alert(response.error.description);
                    // alert(response.error.source);
                    // alert(response.error.step);
                    // alert(response.error.reason);
                    // alert(response.error.metadata.order_id);
                    // alert(response.error.metadata.payment_id);
                });
                paymentObject.open();   //Open the payment window after auto populating with options object data
            }
            else{
                throw "Payment Creation Failed" 
            }
        }
        else{
            throw "Script Loading Failed";
        }
    }
    catch(e){
        console.log(e);
    }
}

function Razorpay({amount,currency}) {

    return (
        <>
          <button onClick={(e)=>{displayPaymentPortal(e,amount,currency)}}>Pay with Razorpay</button>  
        </>
    )
}

export default Razorpay
