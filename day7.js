var test = []
function sample(r){
    if (r % 3 === 0 && n %5 === 0){
       test.push("FIZZ BUZZ")
        
    }else if(r % 5 === 0){
        test.push("BUZZ")
        
    } else if(r % 3 === 0){
        test.push("FIZZ")
    }else {
         test.push("Enter a valid value")
     }
}

sample(result)
var result = prompt("Enter the given value")

console.log(test)
