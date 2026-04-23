let current = 0;
let answers = [];

let questions = [
  {
    question: "What are you struggling with?",
    options: ["Anxiety", "Depression", "Stress", "Trauma"]
  },
  {
    question: "Preferred therapist gender?",
    options: ["Female", "Male", "No preference"]
  },
  {
    question: "Session type?",
    options: ["online", "in-person", "both"]
  }
];

let therapists = [
  { name: "Dr. Sarah Ahmed", specialty: "Anxiety", gender: "Female", type: "both", image :"dr_hadi.png" },
  { name: "Dr. Omar Hassan", specialty: "Family", gender: "Male", type: "both", image: "" },
  { name: "Dr. Lina Kareem", specialty: "Depression", gender: "Female", type: "online", image: "images/therapist3.jpg" },
  { name: "Dr. Maya Khoury", specialty: "Trauma", gender: "Female", type: "in-person", image: "images/therapist4.jpg" },
  { name: "Dr. Youssef Nader", specialty: "Self-Esteem", gender: "Male", type: "online", image: "images/therapist5.jpg" },
  { name: "Dr. Rana Saleh", specialty: "Stress", gender: "Female", type: "both", image: "images/therapist6.jpg" },
  { name: "Dr. Karim Saad", specialty: "Couples", gender: "Male", type: "in-person", image: "images/therapist7.jpg" },
  { name: "Dr. Hadi Nasr", specialty: "Stress", gender: "Male", type: "online", image: "images/therapist8.jpg" }
];

let q = document.getElementById("question");
let optionsDiv = document.getElementById("options");
let nextBtn = document.getElementById("nextBtn");
let progress = document.getElementById("progress");

function showQuestion() {
  let currentQ = questions[current];

  q.textContent = currentQ.question;
  optionsDiv.innerHTML = "";
  progress.textContent = "Question " + (current + 1) + " of " + questions.length;

  currentQ.options.forEach(function(opt) {
    let btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;

    btn.onclick = function() {
      let allBtns = document.querySelectorAll(".option-btn");
      allBtns.forEach(function(b) {
        b.classList.remove("selected");
      });

      btn.classList.add("selected");
      answers[current] = opt;
    };

    optionsDiv.appendChild(btn);
  });
}

nextBtn.onclick = function() {
  if (!answers[current]) {
    alert("Please select an answer");
    return;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.querySelector(".quiz-card").style.display = "none";
  document.getElementById("resultBox").style.display = "block";

  let scored = therapists.map(function(t) {
    let score = 0;

    if (t.specialty.toLowerCase().includes(answers[0].toLowerCase())) score++;
    if (answers[1] === "No preference" || t.gender === answers[1]) score++;
    if (t.type === answers[2] || t.type === "both") score++;

    let newObj = {};
    for (let key in t) {
      newObj[key] = t[key];
    }
    newObj.score = score;

    return newObj;
  });

  scored.sort(function(a, b) {
    return b.score - a.score;
  });

  let top = scored.slice(0, 3);

  for (let i = top.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = top[i];
    top[i] = top[j];
    top[j] = temp;
  }

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  top.forEach(function(t, i) {
    let percent = Math.round((t.score / 3) * 100);

    resultDiv.innerHTML += `
      <div class="card ${i === 0 ? "best" : ""}">
        <img src="${t.image}" alt="${t.name}" onerror="this.src='images/default.jpg'">
        <h3>${t.name}</h3>
        <p>${t.specialty}</p>

        <div class="bar">
          <div class="fill" style="width:${percent}%"></div>
        </div>

        <p>${percent}% Match</p>
      </div>
    `;
  });
}

showQuestion();
