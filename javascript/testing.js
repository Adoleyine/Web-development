 var age = prompt("Enter age: ");

 if (age < 18){
     console.log("can't enter bar");
 }
 else if (age >= 18 && age <23){
     console.log("can enter but can't drink alcohol ");
 }
 else{
     console.log("can enter and drink anything");
 }


//  while loop

// var number=132;
// while(number < 149){
//     console.log(number);
//     number += 2;
// }

// var number=25;
// while(number <= 100){
//     if (number % 7 === 0){
//         console.log(number);
//     }
//     number ++;
// }


// for loop

// for(var number = 134; number<=148; number++){
//     console.log(number);
//     number= number + 1;
// }

// for(var number = 25; number<=100; number++){
//     if((number % 7 === 0) && (number % 5 === 0))
//     {
//         console.log(number);
//     }
// }
// ARRAY

var books = ['Harry Potter','Hobbit','Hunger Games','little Princess'];
console.log(books[3]);
var movies = [
    ['matrix1','matrix2','matrix3'],
    ['benten1','benten2','benten3'],
    ['godfather1','godfather2','godfather3']
];
console.log(movies[2][2]);