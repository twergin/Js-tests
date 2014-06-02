//find out if a number is an integer.  typeof is needed because non numbers will return true otherwise
function isInteger(x) {
        return (typeof x === 'number') && (x % 1 === 0);
    }

// find out if a number is odd
var isOdd = function(num) {
    if(num % 2 === 0) {
        console.log("Number is even");
    } else {
            console.log("Number is odd");
    }
};

// find out if x is a multiple of y
var isMultiple = function(x, y) {
	if(x % y === 0) {
		console.log(x + " is a multiple of " + y);
	} else {
		console.log(x + " is not a multiple of " + y);
	}
};

// find all multiples of x between 1 and 100
var allMultiples = function(x) {
    for(var i = x; i <= 100; i += x) {
        console.log(i);
    }
};

allMultiples(5);

//Find All prime numbers between 1 and x
// prime numbers return true
var arr = [];
var isPrime = function(num) {
    for(var i = 2; i < num; ++i) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
};

var allPrimes = function(x) {
    for(var j = 1; j <= x; j += 2) {
        if (isPrime(j)) {
            arr.push(j);
        }
    }
console.log(arr);
};

allPrimes(30);

// Reverse a String
alert("Hello, this is my string".split("").reverse().join(""));

// Find Total of numbers between 1 and n
var mySum = function(n) {
    var total = 0;
    for(var i = 0; i < n; i++) {
        total += i;
    }
    console.log(total);
};

mySum(6);

// Determine if two strings are exactly the same
var stringMatch = function(strOne, strTwo) {
    if(strOne === strTwo) {
        alert("true");
    } else {
        alert("false");
    }
};

stringMatch("hello, I am bob", "hello, I am bob");

// Determine if two arrays are exactly the same
var len = {};
var arrayMatch = function(arrOne, arrTwo) {
    if(arrOne.length !== arrTwo.length) {
        return false;
    } else {
        len = arrOne.length;
    }
        for(var i = 0; i < len; i++) {
            if(arrOne[i] !== arrTwo[i]) {
                return false;
            }
        }
       return true; 
    
};

alert(arrayMatch([1, 2, 3], [1, 2, 3]));

// Determine if x is a power of two
var num = {};
function getBaseLog(y) {
   num = Math.log(y) / Math.log(2);
}

var ofTwo = function(x) {
    getBaseLog(x);
    if(num % 1 === 0) {
        alert(x + " is 2 ^ " + num);
    } else {
        alert(x + " is not a power of 2.");
    }
};

ofTwo(17);

// Remove matching letters from two arrays 
var first = ["a", "b", "c", "d", "e", "f"];
var second = ["c", "e", "f"];
//alt
//var test = [];

//function logger() {
//for(var i = 0; i < second.length; i++) {
//    test[i] = second[i];
  //  console.log(test[i]);
//}
//}

//logger();

var testOne = second[0];
var testTwo = second[1];
var testThree = second[2];
first.length

var getSame = function () {
    for (var i = 0; i < first.length; i++) {
        if (first[i] === testOne) {
            first.splice(i, 1);
            i--;
        } else if (first[i] === testTwo) {
            first.splice(i, 1);
            i--;
        } else if (first[i] === testThree) {
            first.splice(i);
            i--;
        }
       
    }
    alert(first);
};

getSame();

//immediately invoked function expression (IIFE)
(function isEven(x) {
    if(x % 2 === 0) {
        console.log("even");
    } else {
        console.log("false");
    }
})(2);
//this will execute immediately