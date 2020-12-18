//dependencies
const rs = require('readline-sync')
const chalk = require('chalk')

const userName = rs.question(chalk.blue('Enter your name\n'))
console.log(chalk.green(`${userName}, Welcome to the India Quiz`))

//global variable
let score = 0

//List of questions
const questions = [
{
    question: 'Which state has the highest population?',
    options: 'A)Uttarpradesh B)Maharashtra C)Bihar',
    answer: 'A'
  },
  {
    question: 'In what state is the Elephant Falls located?',
    options: 'A. Orissa B. Manipur C. Meghalaya',
    answer: 'C'
  },
  {
    question: `Which state has the largest area?`,
    options: 'A)Himachal pradesh B)Maharashtra C)Rajasthan',
    answer: 'Bihar'
  },
  {
    question: 'What are the major languages spoken in Andhra Pradesh?',
    options: 'A)English and Telugu B)Telugu and Urdu C)Telugu and Kannada',
    answer: 'B'
  },
  {
    question: `What is the state flower of Haryana?`,
    options: 'A)Lotus B)Golden shower C) Rhododendron',
    answer: 'A'
  }
]

//Function for starting the quiz
function quizStart() {
  const ready = rs.question(chalk.bgRed('Are you ready to start the quiz?(Y/N)\n'))

  if(ready.toUpperCase() === 'Y') {
    for(let i=0; i<questions.length; i++){
      quizPlay(questions[i])
    }
  }else{
    console.log(chalk.bgGreen('Thank You!'))
  }

  console.log(chalk.bgWhite.black('Your final score is '+score))
  console.log(chalk.red('Thank you for taking this quiz'))
}

//Function that asks questions
function quizPlay(askQue) {
  console.log('Que: '+ chalk.yellow(askQue.question))
  console.log(askQue.options)
  const userAnswer = rs.question(chalk.green('Your response: '))

  if(userAnswer.toUpperCase() === askQue.answer.toUpperCase()){
    score++;
    console.log(chalk.grey('Correct! your current score is ' + score + '\n'))
  }else{
    console.log(chalk.red('Wrong Answer! Correct option is '+ askQue.answer + '\n'))
  }
}

//Function call
quizStart();