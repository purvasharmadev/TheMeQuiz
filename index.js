var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0;
var wrong = 0;
var userName= readlineSync.question(chalk.yellow.bold("\nWhat's your name!! \n "));
console.log(chalk.redBright.bold("Welcome") +" " + userName + "!!" )
console.log(chalk.underline.yellow.bold("to How Well Do you know Purva!!\n"));

console.log(chalk.bgYellow("About the quiz:\n"))

console.log(chalk.bgBlue("1.There are total 5 question \n 2.Each question is about ME"+"\n 3.Each question is of 1 mark\n"))

console.log(chalk.bgBlue("\n\nSo let the game begin!!!\n\n"));


function play(question,answer){
  var userAns = readlineSync.question(chalk.cyanBright.bold(question));
  if(userAns === answer){
    score = score+1;
  }else{
    wrong=wrong+1;
  }
}

questions=[{
  question: "What is my nickname?\n",
  answer: "minki"
},
{
  question:"When is my birthday?\n",
  answer:"10 jan"
},
{
  question:"How many schools did I changed?\n ",
  answer:"6"
},
{
  question:"Which international boy band I like the most?\n",
  answer:"bts"
},
{
  question:"Which is my best time pass? \n",
  answer:"using phone"
},
]
for(var i=0;i<questions.length;i++){
  CurrentQues=questions[i]
  play(CurrentQues.question,CurrentQues.answer);
  console.log(chalk.red("-----------------------"))

}
console.log(chalk.yellow("\n You got " + score + " Right !!!"))
if(score === 5){
  console.log(chalk.redBright("Yes! you know me pretty well!!\nyou deserve to give me a treat!!\nYou can call me and ask when I am free  ;p"))
}else{
  console.log(chalk.cyanBright("You can always talk more too know more about me!! ;) "))
}