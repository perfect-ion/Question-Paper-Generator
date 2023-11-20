class QuestionStore {
    constructor() {
      this.questions = [];
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    getQuestions() {
      return this.questions;
    }
  
    getQuestionsByDifficulty(difficulty) {
      return this.questions.filter((question) => question.difficulty === difficulty);
    }
  }
  
  module.exports = QuestionStore;