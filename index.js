var readlineSync = require('readline-sync');
 const chalk = require('chalk');

var userScore = 0
console.log(chalk.inverse('SPACE is the source of fantastic facts that have inspired scientists for millennia. Why not test your knowledge of space trivia with 5 quiz questions ? .Lets start!!'))
console.log('-------------------')
var userName = readlineSync.question("What's your name by the way ?")
 console.log(chalk.bgYellow('Hii ' + userName))
console.log('                       ')
console.log("Let's start the quiz ")
console.log('                       ')
console.log('Each right answer will give 2 points and a wrong answer will cost you 1 minus point')
console.log('                       ')
 //play function 
 function play(question , answer){
   userAnswer = readlineSync.question(question);

   if(userAnswer === answer){
     console.log(chalk.grey.bgGreen('Correct Answer !! Hurray'))
    userScore = userScore + 2
     
   }else{
     console.log(chalk.bgRed('Wrong Answer !! oopsie'))
     userScore = userScore - 1
   }
   console.log('Your current score is ' , userScore)
   console.log('-------------------')
 }
 
  var questions = [
    {
      question : 'How many hours are there in a day ?',
      answer : '24' ,
    } ,
    {
      question : ['Which direction does the Earth spin? Options : a)From East to West  b)From West to East        '   ],
      answer : 'b' ,
    } ,
    {
      question : 'What is the smallest planet in our solar system?' ,
      answer : 'mercury' ,
    },
    {
      question : 'How many planets are there in the solar system ?' ,
      answer : '8' ,
    },
    {
      question : 'Is sun a star or a commet ? ' ,
      answer : 'star' ,
    }
  ]


  for(i = 0 ; i < questions.length ; i++){
    play(questions[i].question , questions[i].answer)
  }

//play('what is 2+3 ? ' ,'5')
//play('what is 1 + 3 ? ' , '4')

console.log(chalk.bgCyan('Your Final Score is ' , userScore))