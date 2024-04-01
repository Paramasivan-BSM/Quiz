let UserName = prompt("Enter Your Name");
const quizData = [
  {
    question: "What is Python?",
    a: "A high-level programming language",
    b: "A snake species",
    c: "A data structure",
    d: "A database management system",
    correct: "a",
  },
  {
    question: "What is the output of '2 + 3 * 4' in Python?",
    a: "20",
    b: "14",
    c: "16",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Which of the following data types is mutable in Python?",
    a: "Integer",
    b: "Tuple",
    c: "String",
    d: "List",
    correct: "d",
  },
  {
    question: "What is the output of 'print('Hello'[::-1])' in Python?",
    a: "olleH",
    b: "Hello",
    c: "Nothing is printed",
    d: "Syntax Error",
    correct: "a",
  },
  {
    question: "What is the result of 10 == '10' in Python?",
    a: "True",
    b: "False",
    c: "Error",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "How do you comment out multiple lines of code in Python?",
    a: "// This is a comment",
    b: "# This is a comment",
    c: "/* This is a comment */",
    d: "''' This is a comment '''",
    correct: "d",
  },
  {
    question: "Which keyword is used to define a function in Python?",
    a: "def",
    b: "function",
    c: "define",
    d: "func",
    correct: "a",
  },
  {
    question: "What does the 'pass' statement do in Python?",
    a: "Exits the program",
    b: "Does nothing",
    c: "Prints 'pass'",
    d: "Raises an exception",
    correct: "b",
  },
  {
    question: "What is the output of 'bool('False')' in Python?",
    a: "True",
    b: "False",
    c: "Syntax Error",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the result of '3 * '3' in Python?",
    a: "9",
    b: "'333'",
    c: "TypeError",
    d: "Syntax Error",
    correct: "c",
  },
  {
    question: "How do you check the length of a list named 'myList' in Python?",
    a: "length(myList)",
    b: "myList.length()",
    c: "len(myList)",
    d: "myList.len()",
    correct: "c",
  },
  {
    question:
      "Which of the following statements is used to exit a loop in Python?",
    a: "halt",
    b: "exit",
    c: "break",
    d: "quit",
    correct: "c",
  },
  {
    question: "What is the output of 'print(type(3.14))' in Python?",
    a: "<class 'int'>",
    b: "<class 'float'>",
    c: "<class 'string'>",
    d: "Syntax Error",
    correct: "b",
  },
  {
    question:
      "Which built-in function is used to read a line from the standard input in Python?",
    a: "scan()",
    b: "input()",
    c: "readline()",
    d: "gets()",
    correct: "b",
  },
  {
    question: "What is the output of 'print(5 == True)' in Python?",
    a: "True",
    b: "False",
    c: "Syntax Error",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What does the 'lambda' keyword signify in Python?",
    a: "A variable",
    b: "A function",
    c: "An expression",
    d: "A class",
    correct: "b",
  },
  {
    question: "What is the result of '2 * 3 ** 3 * 4' in Python?",
    a: "216",
    b: "432",
    c: "648",
    d: "864",
    correct: "c",
  },
  {
    question: "Which of the following is an incorrect variable name in Python?",
    a: "_my_var",
    b: "my-var",
    c: "myVar",
    d: "MYVAR",
    correct: "b",
  },
  {
    question: "What is the output of 'print(10 / 2)' in Python?",
    a: "5.0",
    b: "5",
    c: "2.0",
    d: "2",
    correct: "a",
  },
  {
    question: "Which of the following is not a Python data type?",
    a: "Dictionary",
    b: "Tuple",
    c: "List",
    d: "Integer",
    correct: "d",
  },
  {
    question: "What is the output of 'print('hello' + 1)' in Python?",
    a: "hello1",
    b: "hello 1",
    c: "TypeError",
    d: "hello",
    correct: "c",
  },
  {
    question:
      "Which of the following is not a correct way to start a comment in Python?",
    a: "//",
    b: "#",
    c: "'''",
    d: '"""',
    correct: "a",
  },
  {
    question: "What is the result of '2 == 2.0' in Python?",
    a: "True",
    b: "False",
    c: "Syntax Error",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "How do you convert a string to uppercase in Python?",
    a: "str.upper()",
    b: "str.toUpper()",
    c: "str.upperCase()",
    d: "str.casefold()",
    correct: "a",
  },
];

let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let option = document.querySelectorAll(".answer");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function deselectAnswers() {
  for (var i = 0; i < option.length; i++) {
    option[i].checked = false;
  }
}

function getSelected() {
  let answer;
  for (var i = 0; i < option.length; i++) {
    if (option[i].checked) {
      answer = option[i].id;
      break;
    }
  }
  return answer;
}

function loadQuiz() {
  deselectAnswers();
  let currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();

document.getElementById("submit").addEventListener("click", function () {
  let answer = getSelected();
  if (answer) {
    if (answer == quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      //    <button onclick="history.go(0)">Play Again</button>
      quiz.innerHTML = `
                      <h2> Hello,${UserName} You answered ${score}/${quizData.length} questions correctly</h2>
                
                       `; // location.reload() won't work in CodePen for security reasons;
    }
  }
});
