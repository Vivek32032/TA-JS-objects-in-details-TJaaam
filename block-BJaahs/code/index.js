//without Object.

let questionOneTitle = "What is the Capital of India";
let questionOneOption = ["Kolkata", "Mumbai", "Hyderabad", "New Delhi"];
let questionOneAnswer = 3;
function isAnswerCorrect(answer) {
    return answer === questionOneAnswer ? true : false;
}
function getCorrectAnswer() {
    return questionOneOption[questionOneAnswer];
}

//with Object.

let questionOne = {};
questionOne.Title = "What is the Capital of India";
questionOne.Option = ["Kolkata", "Mumbai", "Hyderabad", "New Delhi"];
questionOne.Answer = 3;
questionOne.isAnswerCorrect = function (answer) {
    return answer === questionOneAnswer ? true : false;
}
questionOne.getCorrectAnswer = function () {
    return questionOneOption[questionOneAnswer];
}


//function To Create Object

function createQuestionFunction(data) {
    let question = {};
    question.Title = data.title;
    question.Option = data.options;
    question.Answer = data.correctAnswerIndex;
    question.isAnswerCorrect = function (yourAnswer) {
        return yourAnswer === question.Answer ? true : false;
    }
    question.getCorrectAnswer = function () {
        return question.Option[question.Answer];
    }
    return question;
}


// using this keyword.

function createQuestionUsingThis(data) {
    let question = {};
    question.Title = data.title
    question.Option = data.options;
    question.Answer = data.correctAnswerIndex;
    question.isAnswerCorrect = function (yourAnswer) {
        return yourAnswer === this.Answer ? true : false;
    }
    question.getCorrectAnswer = function () {
        return this.Option[this.Answer];
    }
    return question;
}


//test
const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  }

try{
    createQuestionFunction(data);
}
catch(error){
    alert(error);
}