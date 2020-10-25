import React from 'react';
import './Card.css';

const Card = ({exchange, source, price, percentage, posOrNeg})=>{
    const color = posOrNeg === 'pos'? 'green': 'red'
    return(
        <div className = 'Card'>
            <h2 className = 'exchanges'>
                {exchange}
            </h2>
            <h2 className = 'exchangePrice'>{price}</h2>
            <div className = 'bottomCard'>
                <h3 className = 'source'>{source}</h3>
                <h3 className = 'percentage' style = {{color}}>{percentage}%</h3>
            </div>
        </div>
    )
}

export default Card;