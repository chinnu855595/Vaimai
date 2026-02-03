let currentQuestion = 0;

const questions = [
  {
    text: "When did we first meet? 😏",
    answers: ["Ugadi", "Holi"]
  },
  {
    text: "Whats are first movie date? 💕",
    answers: ["Virupaksha", "bheeshma"]
  },
  {
    text: "Will you be my Valentine? 💖",
    answers: ["Yes", "No"],
    isFinal: true
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
  optionsEl.innerHTML = "";
  questionEl.innerText = questions[currentQuestion].text;

  questions[currentQuestion].answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;

    if (answer === "Yes") {
      btn.classList.add("yes");
      btn.onclick = handleYes;
    } else {
      btn.classList.add("no");
      btn.onmouseover = moveNo; // 😈 no escape
    }

    optionsEl.appendChild(btn);
  });
}

function handleYes() {
  if (questions[currentQuestion].isFinal) {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("love").classList.remove("hidden");
  } else {
    currentQuestion++;
    loadQuestion();
  }
}

function moveNo(e) {
  const btn = e.target;
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

loadQuestion();