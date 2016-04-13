 var correct = 0;
 
 // prompt
var answer1 = prompt("What was the first name of Lincoln?");
var answer2 = prompt("What was the first name of the first president of the US?");
var answer3 = prompt("What color is a banana?");
var answer4 = prompt("What company makes Dasani water?");
var answer5 = prompt("What animal goes 'Meow'?");
 
 // if statement
if ( answer1.toUpperCase() === 'ABRAHAM' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'GEORGE' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'YELLOW' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'COKE' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'CAT' ) {
  correct += 1;
}
 
 // output results
var medal = "";
if (correct == 5) {
  medal += "gold";
}
else if (correct >= 3) {
  medal += "silver";
}
else {
 medal += "bronze";
}
document.write(correct + " ouf of 5 correct, you got the " + medal + " medal!");
