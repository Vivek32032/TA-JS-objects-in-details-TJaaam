//Prototypal pattern

let questionMethods ={
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
     },
     getCorrectAnswer(){
         return this.options[this.correctAnswerIndex]
     }
     
}

function createQuestion(title,options,answerIndex){
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = answerIndex;
    return question;
}


let firstQuestion = createQuestion(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = createQuestion(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
)

//Pseudoclassical

// function createQuestion(title,options,answerIndex){
//    let question = Object.create(createQuestion.prototype);
//    this.title = title;
//    this.options = options;
//    this.correctAnswerIndex = answerIndex;

// }


//using new keyword
function CreateQuestion(title,options,answerIndex){
   this.title = title;
   this.options = options;
   this.correctAnswerIndex = answerIndex;

}
CreateQuestion.prototype ={
        isAnswerCorrect(index){
           return index === this.correctAnswerIndex;
        },
        getCorrectAnswer(){
            return this.options[this.correctAnswerIndex]
        }
        
}


let thirdQuestion = new CreateQuestion(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let fourthQuestion = new CreateQuestion(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
)

//using Class

class Question{
    constructor(title,options,answerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = answerIndex;
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}



let fifthQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let sixthQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
)


console.log(firstQuestion);
console.log(secondQuestion);
console.log(thirdQuestion);
console.log(fourthQuestion);
console.log(fifthQuestion);
console.log(sixthQuestion);