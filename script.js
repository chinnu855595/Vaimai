let currentQuestion = 0;

const questions = [
  {
    text: "Do you like surprises? 😏",
    answers: ["Yes", "Okay"]
  },
  {
    text: "Do you believe in cute love stories? 💕",
    answers: ["Yes", "Definitely"]
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

    // YES always works normally
    if (answer === "Yes") {
      btn.classList.add("yes");
      btn.onclick = handleYes;
    } 
    // NO moves ONLY for final question
    else if (questions[currentQuestion].isFinal) {
      btn.classList.add("no");
      btn.onmouseover = moveNo;
    } 
    // Normal button for first two questions
    else {
      btn.classList.add("yes");
      btn.onclick = handleYes;
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
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 180 - 90;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

loadQuestion();