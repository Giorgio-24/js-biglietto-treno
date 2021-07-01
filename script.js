/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
 e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
 secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali,
 per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

 /* 1 Quanti kilometri fai? 
    2 Quanti anni hai?
    3 minorenni 20 sconto
    4 anziani 40 sconto
    5 cifra in euro massimo 2 decimali*/

    
    message = 'Il prezzo del tuo biglietto è : ';

    var kilometers = prompt('Quanti kilometri vorresti percorrere?');
    console.log(kilometers)

    var userAge = parseInt(prompt('Quanti anni hai?'));
    console.log(userAge)

    var ageDiscount = 1;

    if (kilometers < 0 || userAge < 1){
        alert("ATTENZIONE!! Hai digitato un valore non valido. Prova a rifare il calcolo inserendo valori positivi.");
        ageDiscount  = toString('Non valido');
        var result = document.getElementById('ticket-price')
        console.log(result)
        result.innerHTML = message + 'Non valido.';
    } else{

        if (userAge < 18){
            ageDiscount = 0.8;
        } else if (userAge > 65) {
            ageDiscount = 0.6;
        }
    

    console.log(ageDiscount)

    var ticketPrice = (kilometers * 0.21) * ageDiscount;
    console.log(ticketPrice)

    var result = document.getElementById('ticket-price');
    console.log(result)

    result.innerHTML = message + ticketPrice.toFixed(2) + '€';

    }