// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//Usare ES6

$(document).ready(function() {

    var biciclette = [
        {
            nome: 'Espera',
            peso: 3
        },
        {
            nome: 'Atlanta',
            peso: 2.8
        },
        {
            nome: 'Sidi',
            peso: 3.7
        },
        {
            nome: 'XTrail',
            peso: 6
        }
    ];

    let biciLeggera = biciclette[0];

    biciclette.forEach((element) => {
        if (element.peso < biciLeggera.peso) {
            biciLeggera = element;
        }
    });

    console.log(biciLeggera);

    const {peso,nome} = biciLeggera;

    $('.container').append(`
        <ul>
            <li>${nome}</li>
            <li>${peso}</li>
        </ul>`);



});
