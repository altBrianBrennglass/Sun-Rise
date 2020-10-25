import React from 'react';
import './YourStockChoices.css'
const YourStockChoices = ({symbol, ethicacy, price, percentage})=>{

    return(
        <tr className = 'YourStocks'>
            <td className = 'symbol'>
                   {symbol}
            </td>      
            <td className = 'ethicacy'>
                   {ethicacy}
            </td>
            <td className = 'price'>
                   {price}
            </td>
            <td className = 'percentage'>
                   {percentage}
            </td>       
        </tr>
    );
}

export default YourStockChoices;