const Alpaca = require('@alpacahq/alpaca-trade-api');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://richrich:Zhxy8yGA87Arzlx2@cluster0.lua7i.mongodb.net/richrich?retryWrites=true&w=majority', { useUnifiedTopology: true })
.then(isConnected => console.log('connected'))

const alpaca = new Alpaca({
    keyId: 'PK4DLPY4YG95AAK2HCME',
    secretKey: 'NfElMNeh9p3JbUYVSFjuyGYj20AmJRwmoPS58bCd',
    paper: true,
    usePolygon: false
});

const app = express();
app.use(cors());
app.get('/stockData/:symbol', (req, res)=>{

    const symbol = req.params.symbol;
    const barset = alpaca.getBars(
        'day',
        symbol,
        {
            limit: 1
        }
    ).then((barset) => {
        const aapl_bars = barset[symbol]
    
        console.log(...aapl_bars);
        res.json(...aapl_bars)
    })
})

app.listen(5000, ()=>console.log('listening'))
// Get daily price data for AAPL over the last 5 trading days.
