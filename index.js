const QuestionStore = require('./QuestionStore');
const QuestionPaperGenerator = require('./QuestionPaperGenerator');

// Questions data and input data
const questions = require("./questions")
const difficultyDistribution = require("./input")

// Sample usage
const questionStore = new QuestionStore();
questions.forEach((question) => questionStore.addQuestion(question));

const totalMarks = 100;

const questionPaper = QuestionPaperGenerator.generateQuestionPaper(questionStore, totalMarks, difficultyDistribution);

questionPaper.forEach((question)=>{
    console.log(question);
})

