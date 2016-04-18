 var correct = 0;
 
 function question(question, answer) {
  var answer = prompt(question);
  if ( answer.toUpperCase() === answer ) {
   correct += 1;
  }
}

question("What was the first name of Lincoln?", 'ABRAHAM');
question("What was the first name of the first president of the US?", 'GEORGE');
question("What color is a banana?", 'YELLOW');
question("What company makes Dasani water?", 'COKE');
question("What animal goes 'Meow'?", 'CAT');
 
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




