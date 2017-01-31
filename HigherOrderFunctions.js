function repeat (fn, n) {
for (var i = 0; i < n; i++) {
	fn();
}
}
 
repeat(hello, 8);

function hello() {
	console.log('Hello world')
}

function goodbye() {
	console.log('goodbye world')
}





// Function as Return Values 


function createGreeter(greeting) {
  return function(name){
    console.log(greeting + name);
  };
}

var helloGreeter = createGreeter("hello");

var bonjourGreeter = createGreeter("bonjour");


helloGreeter("Anna");
bonjourGreeter("Sofia");

/**
 * ROOT LEVEL Universe
 * var helloGreeter
 * var bonjourGreeter; 
 * 
 * =====
 * Universe 1
 * var greeting = 'hello';
 * anonymous fn(name) { console.logs...};
 * 
 * =====
 * 
 * Universe 2
 * var greeting = 'bonjour';
 * anonymous fn(name) {...}
 * 
*/




// For each, filter and map



var array = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]


function removeNegatives(value) {
	// this will return true if the numbers are positive; false if any numbers are negative
	if (value[0] > -1 &&  value[1] > -1){
			return true;
	}
}

var filteredArray = array.filter(removeNegatives);




function turtleSteps(arr){
	return arr[0] + arr[1];
}

var turtleStepsarr = filteredArray.map(turtleSteps);


function logout(value) {
console.log("the turtle took" +value + "steps");
}



turtleStepsarr.forEach(logout)


//  another way to slove the same problem



var filteredArray = array.filter(
  function(innerArr, index){
    console.log('We are on ' + index + ' index inside the array');
    if (innerArr[0] > -1 &&  innerArr[1] > -1){
  			return true;
  	}
  }
);

var turtleStepsarr = filteredArray.map(function(innerArr){
  return innerArr[0] + innerArr[1];
});

turtleStepsarr.forEach(function(val){
  console.log('Turtle took ' + val + ' steps.');
});




