// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri
// inseriti dall'utente

//Usare ES6

$(document).ready(function() {

    var listaNomi = [
        {
            nome:'Alberto',
        },
        {
            nome:'Chiara',
        },
        {
            nome:'Simone',
        },
        {
            nome:'Carlo',
        },
        {
            nome:'Davide',
        },
        {
            nome:'Erica',
        },
        {
            nome:'Carla',
        },
        {
            nome:'Filippo',
        },
        {
            nome:'Maria',
        },
        {
            nome:'Sandro',
        },
    ];

    let sceltaUno = parseInt(prompt("Digitare un numero da 0 a 9"));
    let sceltaDue = parseInt(prompt("Digitare un numero da 0 a 9"));

    let newListaNomi = listaNomi.filter((element, index) => {
        return sceltaUno <= index && sceltaDue >= index;
    });

    console.log(newListaNomi);


});
