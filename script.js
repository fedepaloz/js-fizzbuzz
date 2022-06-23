/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare? */

//se x è divisibile per 3 allora il risultato è fizz
//se x è divisibile per 5 allora il risultato è buzz 
//se x è divisibile per 3 e per 5 allora il risultato è fizzbuzz

const numberPage = document.getElementById('multipli')

for (let i = 1 ; i <= 100 ; i++) {
 
  if (i % 15 == 0 ) {console.log("fizzbuzz")}
  else if (i % 3 == 0) {console.log("fizz")}
  else if (i % 5 == 0) {console.log("buzz")}
  else {console.log(i)}
 }



