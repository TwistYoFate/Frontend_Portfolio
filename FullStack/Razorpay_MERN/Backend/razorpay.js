const express = require('express')
const Razorpay = require('razorpay');
const {v4 : new_uuid} = require('uuid');

// Razorpay Facade Instance creation based on Company's Razorpay account
const rp = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
})

// New Router Middleware for Razorpay
const router = express.Router();

// Routes
router.get('/create_order_of/:amount/:currency',async (req,res)=>{
    let options = {
        amount: parseInt(req.params.amount)*100,  // amount in the smallest currency unit
        currency: req.params.currency,
        receipt: new_uuid()
      };
    try{
        let order = await rp.orders.create(options)
        console.log("Order Generated");
        res.status(200).send(order);
    }catch(error){
        console.log("Order creation error");
    }
})

module.exports = router;