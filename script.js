for (var y = 0; y < 1; y++){

    var finalPriceMessage = 'Il prezzo del tuo biglietto è : ';

    var kilometers = parseFloat(prompt('Quanti kilometri vorresti percorrere?'));
    console.log(kilometers)

    var userAge = parseInt(prompt('Quanti anni hai?'));
    console.log(userAge)

    var ageDiscount = 1;

    if (isNaN(kilometers) || isNaN(userAge) || kilometers < 0 || userAge < 1){
        var y = --y
        alert("ATTENZIONE!! Hai digitato un valore non valido. Prova a rifare il calcolo inserendo valori positivi.")
        ageDiscount  = toString('Non valido')
        var result = document.getElementById('ticket-price')
        console.log(result)
        result.innerHTML = finalPriceMessage + 'Non valido.';
    } else{

        if (userAge < 18){
            ageDiscount = 0.8;
        } else if (userAge > 65) {
            ageDiscount = 0.6;
        }

        console.log(ageDiscount)

        var ticketPrice = (kilometers * 0.21) * ageDiscount;
        console.log(ticketPrice)
        
        var kilometersDone = document.getElementById('kilometers')
        kilometersDone.innerHTML = 'Devi percorrere ' + kilometers + ' kilometri.';
        
        var age = document.getElementById('age')
        age.innerHTML = 'Hai ' + userAge + ' anni.';
        
        var result = document.getElementById('ticket-price');
        console.log(result)
        
        result.innerHTML = finalPriceMessage + ticketPrice.toFixed(2) + '€';
    }
}

