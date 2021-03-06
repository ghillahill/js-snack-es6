// Creiamo una copia dell'array di partenza e aggiungiamo ai singoli elementi una nuova proprietà
// position che contiene una lettera casuale. Non dobbiamo modificare l'array iniziale.

//Usare ES6

$(document).ready(function() {

    var products = [
        {
            nome: 'libro',
            codice: 'asd',
            prezzo: 1.8
        },
        {
            nome: 'scatola',
            codice: 'fds',
            prezzo: 3
        },
        {
            nome: 'gomma',
            codice: 'drg',
            prezzo: 0.7
        },
        {
            nome: 'penna',
            codice: 'drg',
            prezzo: 0.5
        }
    ];

    const getRandomChar = () => {
        var alfabeto = 'abcdefghijklmnopqrstuvwxyz';

        var posizione = getRndInteger(0, 25);

        var lettera_casuale = alfabeto.charAt(posizione);
        return lettera_casuale;
    };

    let products_copy = products.map((element) => {

        const newProduct = {
            ...element,
            position: getRandomChar()
        };

        return newProduct;
    });

    console.log(products_copy);

    /*
    let products_copy = [];

        products.forEach((product_copy) => {

            let product_current = products[0];

            product_copy = {
                nome: product_current['nome'],
                codice: product_current['codice'],
                prezzo: product_current['prezzo'],
                position: getRandomChar()
            };
            products_copy.push(product_copy);
        });

    console.log(products_copy);

    });*/



    // genero un numero a caso
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };
});
