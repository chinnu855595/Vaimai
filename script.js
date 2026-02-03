const questions = [
  {
    q: "Which movie did we see together first? 🎬",
    options: ["Virupaksha", "Pushpa"]
  },
  {
    q: "When did we meet for the first time? 🌸",
    options: ["Ugadi", "Holi"]
  }
];

let current = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
  questionEl.innerText = questions[current].q;
  optionsEl.innerHTML = "";

  questions[current].options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = nextQuestion;
    optionsEl.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("valentine").classList.remove("hidden");
  }
}

// NO button escape 😈
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function showLove() {
  document.getElementById("valentine").classList.add("hidden");
  document.getElementById("love").classList.remove("hidden");
}

loadQuestion();