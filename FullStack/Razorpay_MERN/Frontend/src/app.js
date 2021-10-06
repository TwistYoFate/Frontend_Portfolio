import React from 'react'
import reactDOM from 'react-dom'
import Razorpay from './components/Razorpay'

function App() {
    const [amt,setamt] = useState();
    const [curr,setcurr] = useState();
    return (
        <div>
            <input type="text" placeholder="Amount" onChange={(e)=>{setamt(e.target.value)}}></input>
            <select onChange={(e)=>{setcurr(e.target.value)}}>
            <option value='USD' defaultChecked>USD</option>
            <option value='INR'>INR</option>
            </select>
            <Razorpay amount={amt} currency={curr}/>
        </div>
    )
}

reactDOM.render(<App />, document.getElementById("root"));




//HOT Module Reload for Fast Development
if (module.hot) {
    module.hot.accept()
}
