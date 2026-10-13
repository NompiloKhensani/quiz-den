const sectionsScreen = document.getElementById("sections-screen");
const modeScreen = document.getElementById("mode-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const sectionsGrid = document.getElementById("sections-grid");
const modeHeading = document.getElementById("mode-heading");
const sectionName = document.getElementById("section-name");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const retryButton = document.getElementById("retry-btn");
const sectionsButton = document.getElementById("sections-btn");
const progressBar = document.getElementById("progress");
const backButton = document.getElementById("back-btn");
const screens = document.querySelectorAll(".screen");

const FLAG = `<svg class="flag" viewBox="0 0 90 60" aria-hidden="true"><rect width="90" height="30" fill="#DE3831"/><rect y="30" width="90" height="30" fill="#002395"/><polygon points="0,0 48,30 0,60" fill="#fff"/><rect x="32" y="21" width="58" height="18" fill="#fff"/><polygon points="0,6 38,30 0,54" fill="#007A4D"/><rect x="26" y="25" width="64" height="10" fill="#007A4D"/><polygon points="0,11 28,30 0,49" fill="#FFB612"/><polygon points="0,16 20,30 0,44" fill="#000"/></svg>`;

function sectionIcon(section) {
  return section.id === "south-africa" ? FLAG : section.emoji;
}

const QUESTIONS_PER_ROUND = 10;

let currentSection = null;
let roundQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let advanceTimer = null;
const previousRoundQuestions = {};
let selectedDifficulty = "medium";

retryButton.addEventListener("click", startQuiz);
sectionsButton.addEventListener("click", showSections);
backButton.addEventListener("click", showSections);

sections.forEach((section) => {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("section-btn");
  button.dataset.section = section.id;
  button.setAttribute("aria-label", section.name);
  button.innerHTML = `<span class="section-emoji" aria-hidden="true">${sectionIcon(section)}</span><strong>${section.name}</strong>`;
  button.addEventListener("click", () => {
    currentSection = section;
    modeHeading.innerHTML = `${sectionIcon(section)} ${section.name}`;
    showScreen(modeScreen);
  });
  sectionsGrid.appendChild(button);
});

document.querySelectorAll(".mode-btn").forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.mode;
    startQuiz();
  });
});

function showScreen(screen) {
  screens.forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
  backButton.hidden = screen === sectionsScreen;
}

function showSections() {
  clearTimeout(advanceTimer);
  answersDisabled = false;
  showScreen(sectionsScreen);
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function pickRound(section) {
  const roundKey = `${section.id}:${selectedDifficulty}`;
  const pool = section.questions.filter((item) => item.difficulty === selectedDifficulty);
  const seen = previousRoundQuestions[roundKey] || new Set();
  const fresh = shuffle(pool.filter((item) => !seen.has(item.question)));
  const repeats = shuffle(pool.filter((item) => seen.has(item.question)));
  const picked = [...fresh, ...repeats].slice(0, QUESTIONS_PER_ROUND);

  previousRoundQuestions[roundKey] = new Set(picked.map((item) => item.question));

  return picked.map((item) => ({
    question: item.question,
    answers: shuffle(item.answers),
  }));
}

function startQuiz() {
  clearTimeout(advanceTimer);
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = "0";
  roundQuestions = pickRound(currentSection);
  totalQuestionsSpan.textContent = roundQuestions.length;
  const modeLabel = selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);
  sectionName.dataset.mode = selectedDifficulty;
  sectionName.innerHTML = `${sectionIcon(currentSection)} ${currentSection.name} · ${modeLabel}`;
  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  answersDisabled = false;

  const currentQuestion = roundQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  progressBar.style.width = (currentQuestionIndex / roundQuestions.length) * 100 + "%";
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.currentTarget;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  advanceTimer = setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < roundQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  finalScoreSpan.textContent = score;
  maxScoreSpan.textContent = roundQuestions.length;
  showScreen(resultScreen);
}
