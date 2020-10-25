import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav'
import './Search.css';
import Stock from './Stock/Stock'
import Purchase from './Purchase'
import EthicacyTest from './EthicacyTest';

const Search = ()=>{
    const [search, setSearch] = useState('face');
    const [responses, setResponses] = useState(null);
    const [activeInterest, setActiveInterests] = useState(null);
    
    useEffect(()=>{
        try{
            axios.get(`https://financialmodelingprep.com/api/v3/search?query=${search}&limit=5&apikey=demo`)
            .then(res=>setResponses(res.data))
        }
        catch{
            setResponses(false);
        }
        console.log(responses)
    }, [search])
    
    return(
    <div>
        <div className = 'Search'><h1>Search for Exciting Investment Oppurtunities</h1>
            <div className = 'searchAndStuff'>
                
                    <div className = 'searchBox'>
                            
                        <input
                            className = 'input form-control'
                            maxLength = {10}
                            placeholder = 'Search for companies'
                            value = {search}
                            onChange = {({target})=>setSearch(target.value)}
                        />
                        
                        <div className = 'responses'>
                            {responses && responses.map(stock=>
                            <div 
                                className = 'stockSearch' 
                                key = {stock.symbol}
                                onClick = {()=>{
                                    setActiveInterests(stock)
                                }}
                            >   <table className = 'borderBottomNew'>
                                    <tr>
                                        <td className = 'td'><span className = 'stock-symbol'>{stock.symbol} </span></td>
                                        <td className = 'td'><span className = 'stock-symbol'>{stock.name} </span></td>
                                        <td className = 'td'><span className = 'stock-symbol'>{stock.stockExchange}</span></td>
                                    </tr>
                                </table>
                                
                                
                                
                            </div>)}
                        
                        </div>
                    </div>
                    <Purchase />
                    {activeInterest && <EthicacyTest symbol = {activeInterest.symbol} />}
                    <div className = 'stock_data'>
                        <h1 className = 'companyTitle'>Company Info</h1>
                        {activeInterest && <Stock symbol = {activeInterest.symbol} name = {activeInterest.name}/>}
                    </div>
           
            </div>
        </div>
        
        <Nav />
    </div>
    )

}

export default Search;