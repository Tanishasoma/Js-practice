var ram =95
var height1 =1.88
var sham = 85
var height2 = 1.76

 function bmi(ram,height1,sham,height2){
var x = ram/ (height1*height1)
var y=sham/(height2*height2)

console.log(x,y)
var compare = x>y

     console.log(compare)
 }

bmi(ram , height1,sham,height2)
