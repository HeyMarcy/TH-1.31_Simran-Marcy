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



