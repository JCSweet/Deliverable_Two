var input = "Are you going to a formal, semi-formal, or casual event?";
var input2 = "Fill in the blank. It is ___ degrees Fahrenheit outside today.";

var eventType = prompt(input);
var tempFahr = prompt(input2);

if (tempFahr > 70) {
	var x = "no jacket";
}
else if (tempFahr < 54) {
	var x = "coat";
}
else {
	var x = "jacket";
}
	
if (eventType === "formal") {
    var y = "a suit";
}
else if (eventType === "semi-formal") {
    var y = "a polo";
}
else {
    var y = "something comfortable";
}


var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + y + " and " + x + ".";
console.log(result);