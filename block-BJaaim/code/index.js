
class Question{
    constructor(title,options,answer){
        this.title = title;
        this.options = options;
        this.answer = answer;
    }
    isCorrect(answer){
        return (this.answer === answer);
    }
    getCorrectAnswer(){
        return this.answer;
    }
    createUI(){

    }
}

class Quiz {
    constructor(questions = []){
        this.allQuestions = questions;
        this.activeIndex = index;
        this.correctAnswer = 0;
        this.score = 0;
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex+1;
        this.createUI();
    }
    createUI(){

    }
    updateScore(){
        this.score = this.correctAnswer*4;
    }


}