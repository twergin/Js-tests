/* Divide two numbers without using division operator */

var divExample = function(num, dividedBy) {
	var newDiv = Math.pow(dividedBy, -1);
    var ans = newDiv * num;
    console.log(ans);
}

divExample(24, 5);