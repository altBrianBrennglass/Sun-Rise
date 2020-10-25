import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./Stock.css";

const Stock = ({symbol, name})=>{
    const [stockData, setStockData] = useState(null);
    useEffect(()=>{
        try{
            axios.get(`http://localhost:5000/stockData/${symbol}`)
            .then(res=>setStockData(res.data))
            .catch(err=>console.log(err))
        }
        catch{
            console.log('error');
        }
    }, [])

    return(
        <div>{stockData &&
            <ul className = 'stockData'>
                <li>Company: {name}</li>
                <li>Symbol: {symbol}</li>
                <li>Open: {stockData.openPrice}</li>
                <li>Close: {stockData.closePrice}</li>
                <li>High: {stockData.highPrice}</li>
                <li>Low: {stockData.lowPrice}</li>
                
            </ul>
        }
        </div>
    )
}

export default Stock;