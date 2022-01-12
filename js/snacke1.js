console.log('js ok');

const numberOne = prompt('inserisci numero')
const numberTwo = prompt('inserisci numero');;
const displayElement = document.getElementById('numero-maggiore');
console.log(numberOne);
console.log(numberTwo);

let message = 'il numero maggiore é ';

if (numberOne > numberTwo){
    console.log(numberOne);
    message += numberOne;
} else if (numberOne < numberTwo){
    console.log(numberTwo);
    message += numberTwo;
} else{
    message = 'i numeri sono uguali'
}

