class QuestionPaperGenerator {
    static generateQuestionPaper(questionStore, totalMarks, difficultyDistribution) {
      const questionPaper = [];
      let remainingMarks = totalMarks;
  
      difficultyDistribution.forEach(({ difficulty, percentage }) => {
        const questions = questionStore.getQuestionsByDifficulty(difficulty);
  
        if (questions.length === 0) {
          console.warn(`No questions found for difficulty: ${difficulty}`);
          return;
        }
  
        const marksForDifficulty = Math.ceil((percentage / 100) * totalMarks);
        const selectedQuestions = this.selectQuestions(questions, marksForDifficulty, 0);
      
        if (selectedQuestions) {
          questionPaper.push(...selectedQuestions);
        } else {
          console.warn(`Not enough questions to meet the specified total marks for difficulty: ${difficulty}`);
        }
  
        remainingMarks -= marksForDifficulty;
      });
  
      if (remainingMarks > 0) {
        console.warn(`Not enough questions to meet the specified total marks.`);
      }
  
      return questionPaper;
    }

    // recursive function for selecting questions of a particular difficulty
    // returns an array of questions whose sum of marks is equal to the required marks
  
    static selectQuestions(questions, marksForDifficulty) {
      const memo = new Map();
  
      const exploreOptions = (index, currentMarks) => {
        const key = `${index}-${currentMarks}`;
        if (memo.has(key)) {
          return memo.get(key);
        }
  
        if (currentMarks === 0) {
          return [];
        }
  
        if (index === questions.length || currentMarks < 0) {
          return null;
        }
  
        const selectedWithCurrent = exploreOptions(index + 1, currentMarks - questions[index].marks);
        const selectedWithoutCurrent = exploreOptions(index + 1, currentMarks);
  
        let result;
  
        if (selectedWithCurrent !== null) {
          result = [questions[index], ...selectedWithCurrent];
        } else if (selectedWithoutCurrent !== null) {
          result = selectedWithoutCurrent;
        } else {
          result = null;
        }
  
        memo.set(key, result);
        return result;
      };
  
      return exploreOptions(0, marksForDifficulty) || null;
    }
    
    
    
  }
  
  
  
  module.exports = QuestionPaperGenerator;