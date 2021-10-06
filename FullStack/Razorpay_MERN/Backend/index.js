require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');


const app = require('express')()

app.use(cors());

//Routers
app.use('/razorpay',require('./razorpay'));

app.listen(5000,()=>{
    console.log('Running on 5000');
})

console.log(process.env.RAZORPAY_KEY_ID)