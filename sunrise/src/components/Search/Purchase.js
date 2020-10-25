import React, {useState} from 'react';
import axios from 'axios';
import chevron from '../../assets/chevron.svg';
import './Purchase.css';
const Purchase = ({symbol, cost})=>{
    const [shares, setShares] = useState(0)
    return(

        <div className = 'purchase'>
            <h1 className = 'purchaseTitle'>Purchase Shares</h1>
                <div className = 'shareNumber'>
                    <input
                        className = 'shareInput'
                        value = {shares}
                        type = 'number'
                        onChange= {({target})=>setShares(target.value)}
                    />
            
                </div>
                <button className = 'makePurchase'>Purchase</button>
        </div>
    )
}

export default Purchase;