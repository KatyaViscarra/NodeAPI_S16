const fetch = require('node-fetch');
const fs = require('fs');

/*fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    });*/

    /*async function getCountries() {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        console.log(data)
    }*/

    async function getBitcoin() {
        try {        
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const data = await response.json();
            let currencyList = "";
            Array.from(data).forEach(currency => {
                currencyList+= `${currency['time']}, ${currency['bpi']}`;
            });

            //crear archivo
            fs.writeFile('Bitcoin.txt', currencyList, (error) => {
                if(error){
                    console.log(error);
                    return;
                }
                console.log('Se ha creado el archivo')
            })

            //console.log(data)
        }catch(error){
            console.log(error)
        }
    }

    //ejecutamos la funcion asincrona
    getBitcoin();