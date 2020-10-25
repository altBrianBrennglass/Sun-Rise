import React from 'react';
import {useHistory} from 'react-router-dom';
import dollar from '../../assets/dollar.svg'
import Earth from '../../assets/Earth.svg'
import graph from '../../assets/graph.svg'
import house from '../../assets/house.svg'
import search from '../../assets/search.svg'
import './Nav.css';

function Nav (){
    
    const history = [];
    return(
        <div className = 'navWrapper'>
            <nav className = 'nav'>
{/*
                <div className = 'routingCard' onClick = {()=>history.push('/balance')}>
                    <img src = {dollar} alt = 'balance' className = 'navIcons' />
                    <span className = 'navTitle'>Balance</span>
                </div>
*/}

                <div className = 'routingCard' onClick = {()=>history.push('/ethics')}>
                    <img src = {Earth} alt = 'your ethical impact' className = 'navIcons' />
                    <span className = 'navTitle'>Ethics</span>
                </div>
{/*
                <div className = 'routingCard' onClick = {()=>history.push('/companyData')}>
                    <img src = {graph} alt = 'company data' className = 'navIcons' />
                    <span className = 'navTitle'>companyData</span>
                </div>
*/}
                <div className = 'routingCard' onClick = {()=>history.push('/home')}>
                    <img src = {house} alt = 'home' className = 'navIcons' />
                    <span className = 'navTitle'>Home</span>
                </div>

                <div className = 'routingCard' onClick = {()=>history.push('/search')}>
                    <img src = {search} alt = 'search' className = 'navIcons' />
                    <span className = 'navTitle'>Search</span>
                </div>
            </nav>
        </div>
    )
}

export default Nav