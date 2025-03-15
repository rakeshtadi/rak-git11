let weather = 50;

if (weather > 75) {
    console.log("It's hot outside.");
} 
else if (weather >= 50 && weather <= 75) {
    console.log("It's warm outside.");
} 
 else {
    console.log("It's cold outside.");
}


 let num = prompt("Enter a number:");
 if (num % 5 === 0){
    console.log("num is multiple of 5 ");
 }
else{
    console.log("num is not multiple of 5 ");
}


let marks = 59;
if (marks > 90 && marks === 100){
    console.log("A");
}
else if(marks < 70 && marks === 89){
    console.log('B');
}
else if(marks < 60 && marks > 69){
    console.log("C");
}
else if (marks < 50 || marks === 59){
    console.log('D');
}
else{
    console.log('F');
}