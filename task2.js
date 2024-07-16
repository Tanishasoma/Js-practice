var x = prompt("Enter your weight in kg")
 var y = prompt("Enter your height in metres")


function bmi ( x,y){
 
  var calculator = (x)/(y*y) 
  console.log(calculator.toFixed(1))
} 

bmi(x,y)
