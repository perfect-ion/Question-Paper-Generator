# Introduction
The Question Paper Generator is a Node.js application designed to create question papers based on specified criteria such as difficulty distribution and total marks. The application utilizes a modular and extensible architecture, allowing for easy adaptation to future requirements.

# To try the application:
1. Update the question pool by modifying the questions.js file.
2. Adjust the input criteria by updating the input.js file.
3. Run the application by running the index.js file

Feel free to explore and enhance the functionality of the application by extending its APIs or optimizing the algorithm further.

# Algorithm (Dynamic Programming + memoization)
The Question Paper Generator initially used a recursive selection algorithm. To optimize the performance, the algorithm has been enhanced using dynamic programming with memoization. This technique stores and retrieves previously computed results, reducing redundant calculations and improving overall efficiency.

Time Complexty Analysis
1. Without Memoization O(2^N) 
    where N is number of questions
2. With Memoization O(N*M)
    where N is number of questions & M is total marks


# APIs
The application can be extended to include additional APIs, such as:
1. Add Question API: Allows the addition of new questions to the Question Store.
2. Modify Difficulty Distribution API: Enables dynamic modification of the difficulty distribution for question paper generation.
Feel free to explore and enhance the functionality of the application by extending these APIs.

# Features
1. Dynamic Question Selection: The application dynamically selects questions based on specified difficulty levels, ensuring a balanced representation in the generated question paper.

2. Modular and Extensible Architecture: The code is designed with modularity in mind, allowing for easy extension and adaptation to future requirements. New features can be added without significant code modification.

3. Optimized Algorithm with Dynamic Programming: The question selection algorithm is optimized using dynamic programming with memoization. This enhances performance by avoiding redundant calculations and improving overall efficiency.

4. APIs for Future Enhancements: The code includes placeholders for potential APIs, such as adding new questions to the store or modifying the difficulty distribution dynamically. This allows for further enhancement and customization.

5. Error Handling and Graceful Failure: The code includes error handling mechanisms to gracefully handle scenarios where questions or specified difficulty levels are not available, providing informative warnings in the console.

## Input and Output

Input 1:
[
  { "difficulty": "Easy", "percentage": 20 },
  { "difficulty": "Medium", "percentage": 50 },
  { "difficulty": "Hard", "percentage": 30 }
]

Output 1:
[
  { "question": "Q1", "subject": "Math", "topic": "Algebra", "difficulty": "Easy", "marks": 10 },
  { "question": "Q2", "subject": "Physics", "topic": "Mechanics", "difficulty": "Easy", "marks": 8 },
  { "question": "Q3", "subject": "Chemistry", "topic": "Periodic Table", "difficulty": "Medium", "marks": 12 },
  { "question": "Q4", "subject": "Biology", "topic": "Genetics", "difficulty": "Medium", "marks": 15 },
  { "question": "Q5", "subject": "History", "topic": "World War II", "difficulty": "Hard", "marks": 20 },
  { "question": "Q6", "subject": "Geography", "topic": "Climate Zones", "difficulty": "Hard", "marks": 18 }
]

Input 2:
[
  { difficulty: "Easy", percentage: 25 },
  { difficulty: "Medium", percentage: 45 },
  { difficulty: "Hard", percentage: 30 },
]

Output 2:
Not enough questions to meet the specified total marks for difficulty: Easy
Not enough questions to meet the specified total marks for difficulty: Medium
