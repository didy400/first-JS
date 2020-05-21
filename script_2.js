let number;
number = prompt("De quel nombre veux-tu calculer la factorielle?");
let factorial = 1;
while(number > 0 ){
     factorial = factorial * number ;
     number -= 1;
};

console.log(`le résultat est ${factorial}`)


