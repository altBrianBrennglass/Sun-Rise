const state = {
    user: {
        APIs: {
            alpaca: {
                Urls: {
                    account: 'https://paper-api.alpaca.markets/v2/account',
                    purchase: 'https://paper-api.alpaca.markets/v2/orders'
                
                },
                publicKey: ['APCA-API-KEY-ID', 'PKVWQ2PBT2QLP7FTEWEB'],
                privateKey: ['APCA-API-SECRET-KEY', 'jHiWJtLWhtj8RIQmd1WGWCGzTPfVndmh5aPY9d3X']
            }
        },
        assets: [
            {
                company: '',
                price: '',
                ethicacyRating: '',
                dailyChange: '',
                increaseDescrease: true
            }
        ]
    }
}