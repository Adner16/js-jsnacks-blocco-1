console.log('js ok');

wordOne = prompt('inserisci una parola','ciao');
wordTwo = prompt('inserisci una seconda parola','ciaooooooo');

if( wordOne < wordTwo){
    console.log(wordOne);
} else if (wordOne > wordTwo){
    console.log (wordTwo);
} else {
    console.log('le parole hanno la stessa lunghezza');
}