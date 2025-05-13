let currentQuestionIndex = 0;
let selectedAnswers = [];

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Markdown Language",
      "Hyperloop Machine Language",
      "HyperTool Markup Language"
    ],
    correctAnswer: "A"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "B"
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctAnswer: "C"
  },
  {
    question: "What is the correct syntax to reference an external CSS file?",
    options: [
      "<link src='styles.css'>",
      "<style src='styles.css'>",
      "<link rel='stylesheet' href='styles.css'>",
      "<stylesheet>styles.css</stylesheet>"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which HTML element is used to define a section of navigation links?",
    options: ["<nav>", "<section>", "<header>", "<footer>"],
    correctAnswer: "A"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "/* */"],
    correctAnswer: "B"
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["variable x;", "let x;", "v x = 10;", "int x = 10;"],
    correctAnswer: "B"
  },
  {
    question: "What does `document.getElementById()` do?",
    options: [
      "Selects multiple elements",
      "Creates a new element",
      "Returns the element with the specified ID",
      "Deletes an element by ID"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which property in CSS is used for flexbox layout?",
    options: ["display: flex", "flex: layout", "box: flex", "position: flex"],
    correctAnswer: "A"
  },
  {
    question: "Which JavaScript keyword is used to create a function?",
    options: ["method", "def", "function", "func"],
    correctAnswer: "C"
  }
];

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-number").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  document.getElementById("question").innerText = question.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const letter = String.fromCharCode(65 + index);
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = `${letter}) ${option}`;
    btn.onclick = () => {
      selectAnswer(letter);
      highlightSelection(btn);
    };
    optionsContainer.appendChild(btn);
  });
}

function highlightSelection(selectedBtn) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.classList.remove("selected"));
  selectedBtn.classList.add("selected");
}

function selectAnswer(answer) {
  selectedAnswers[currentQuestionIndex] = answer;
}

function nextQuestion() {
  if (!selectedAnswers[currentQuestionIndex]) {
    alert("Please select an answer before continuing.");
    return;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showReview();
  }
}

function showReview() {
  document.querySelector(".quiz-box").style.display = "none";
  document.getElementById("review-container").style.display = "block";

  const reviewContainer = document.getElementById("review-answers");
  reviewContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const userAnswer = selectedAnswers[index];
    const correct = q.correctAnswer;
    const correctText = q.options[correct.charCodeAt(0) - 65];
    const userText = userAnswer ? q.options[userAnswer.charCodeAt(0) - 65] : "No answer";

    const result = userAnswer === correct ? "✅ Correct" : `❌ Wrong (Correct: ${correct})`;
    const html = `
      <div class="review-question">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        <p>Your answer: ${userAnswer || "None"} — ${result}</p>
        ${userAnswer !== correct ? `<p class="correct-answer">Correct Answer: ${correct}) ${correctText}</p>` : ""}
        <hr>
      </div>
    `;
    reviewContainer.innerHTML += html;
  });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  document.querySelector(".quiz-box").style.display = "block";
  document.getElementById("review-container").style.display = "none";
  renderQuestion();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

renderQuestion();
