//without Object.

let questionOneTitle = "What is the Capital of India";
let questionOneOption = ["Kolkata", "Mumbai", "Hyderabad", "New Delhi"];
let questionOneAnswer = 3;
function isAnswerCorrect(answer) {
    return answer === questionOneAnswer
}
function getCorrectAnswer() {
    return questionOneOption[questionOneAnswer];
}

//with Object.

let question = {
Title = "What is the Capital of India",
Options = ["Kolkata", "Mumbai", "Hyderabad", "New Delhi"],
Answer = 3,
isAnswerCorrect(answer) {
    return answer === question.Answer;
},
getCorrectAnswer() {
    return question.Options[question.Answer];
}
}


//function To Create Object

function createQuestionFunction(data) {
    let question = {};
    question.Title = data.title;
    question.Option = data.options;
    question.Answer = data.correctAnswerIndex;
    question.isAnswerCorrect = function (yourAnswer) {
        return yourAnswer === question.Answer
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
        return yourAnswer === this.Answer
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

createQuestionFunction(testData);
createQuestionUsingThis(testData);