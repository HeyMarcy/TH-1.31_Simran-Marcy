function max(numbers) {
    var currentMax = numbers[0];
    var i = 1;
  
  while(i < numbers.length){
    if(currentMax < numbers[i]){
      currentMax = numbers[i];
    }
    i++;
  }
  
 return currentMax;
}





function min(numbers) {
    var currentMin = numbers[0];
    var i = 1;
  
  while(i < numbers.length){
    if(currentMin > numbers[i]){
      currentMin = numbers[i];
    }
    i++;
  }
  
 return currentMin;
}







//  Compute the average


function average(numbers) {
  var i = 0;
  var num =0;
  while (i<numbers.length){
    num +=numbers[i];
    i++;
  }
  return num/numbers.length;
}



function fizzBuzz(countTo) {
  var arr = [];
  
  for ( var i=1; i<= countTo; i++) {
    switch(true) {
  case (i % 3 === 0) && (i % 5 === 0):
        arr.push('fizzbuzz');
        break;
  case i % 5 === 0:
        arr.push('buzz');
        break;
  case i % 3 === 0:
        arr.push('fizz');
        break;
    default:
        arr.push(i);
    break;
}
    } return arr;                  
  }
fizzBuzz(16);