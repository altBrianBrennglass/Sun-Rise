import React from 'react';
import Card from './Card';
import './PrimaryMarket.css';
const PrimaryMarket = ()=>{

    const dummyData = [
        {
            exchange: 'NYSE',
            price: '$500',
            source: 'Voo',
            percentage: '2',
            posOrNeg: 'pos'
        },
        {
            exchange: 'NASDAQ',
            price: '$500',
            source: 'Voo',
            percentage: '2',
            posOrNeg: 'pos'
        },
        {
            exchange: 'S&P',
            price: '$500',
            source: 'Voo',
            percentage: '2',
            posOrNeg: 'pos'
        },
        {
            exchange: 'RUSSEL',
            price: '$500',
            source: 'Voo',
            percentage: '2',
            posOrNeg: 'pos'
        }
    ];
    return(
        <div className = 'PrimaryMarket'>
            {dummyData.map((market)=><Card className = 'exchange' key = {market.exchange} {...market} />)}
        </div>
    )
}

export default PrimaryMarket;