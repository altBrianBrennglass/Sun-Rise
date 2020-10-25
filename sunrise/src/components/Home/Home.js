import React from 'react';
import Nav from '../Nav/Nav';
import './Home.css';
import YourStockChoices from './YourStockChoices/YourStockChoices';
import PrimaryMarket from './primaryMarkets/PrimaryMarket';
import testData from './YourStockChoices/testData';
const Home = ()=>{
    
    return(
        <div className = 'home'>
            <div className = 'resources'>
                <div className = 'YourInvestments'>
                    <h1 className = 'YourInvestmentsTitle'>Your Investments</h1>
                    <div className = 'yourStocksContainer'>
                        <table className = 'yourStocksTable'>
                            <thead className = 'yourStocksTableHead'>
                                <tr className = 'YourStockTableRow'>
                                    
                                    <th className = 'Symbol'>
                                        Symbol
                                    </th>
                                    <th className = 'ethicacyScore'>
                                        Ethicacy
                                    </th>
                                    <th className = 'Price'>
                                        Price
                                    </th>
                                    <th className = 'Percentage'>
                                        Daily Change
                                    </th>
                                </tr>
                            </thead>
                            <tbody className = 'YourStockChoiceThead'>
                                {testData.map((stock, i)=><YourStockChoices {...stock} key = {i} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className = 'YourInvestments' style = {{marginLeft: '20px'}}>
                    <h1 className = 'YourInvestmentsTitle'>The Markets</h1>
                        <PrimaryMarket />
                </div>
        <div className = 'YourInvestments'>
            <h1 className = 'YourInvestmentsTitle'>Our Recommendations For a Better Earth</h1>
                <div className = 'yourStocksContainer'>
                        <table className = 'yourStocksTable'>
                            <thead className = 'yourStocksTableHead'>
                                <tr className = 'YourStockTableRow'>
                                    
                                    <th className = 'Symbol'>
                                        Symbol
                                    </th>
                                    <th className = 'ethicacyScore'>
                                        Ethicacy
                                    </th>
                                    <th className = 'Price'>
                                        Price
                                    </th>
                                    <th className = 'Percentage'>
                                        Daily Change
                                    </th>
                                </tr>
                            </thead>
                            <tbody className = 'YourStockChoiceThead'>
                                {testData.map((stock, i)=><YourStockChoices {...stock} key = {i} />)}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
            <Nav />
        </div>
    )
}
export default Home