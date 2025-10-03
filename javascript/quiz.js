document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards-container');
  const cards = Array.from(document.querySelectorAll('.card'));
  const nextBtn = document.getElementById('next-btn');
  const nextNames = ['j', 'q', 'p', 'g'];

  nextBtn.addEventListener('click', () => {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const offset = centerX - cardCenterX;
      card.style.transform = `translateX(${offset}px) scale(0.8)`;
      card.style.opacity = '0';
      card.style.zIndex = '10';
    });

    setTimeout(() => {
      cards.forEach((card, i) => {
        const name = nextNames[i] || 'default';
        card.querySelector('.frontCard img').src = `../assets/images/card/game/front/${name}.png`;
        card.querySelector('.backCard img').src = `../assets/images/card/game/back/${name}.png`;
      });

      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transform = '';
          card.style.opacity = '1';
          card.style.zIndex = '';
        }, i * 100);
      });
    }, 600);
  });
});

const soalList = [
  { imgPath: "/assets/images/card/quiz/soal1.png", answer: "M" },
  { imgPath: "/assets/images/card/quiz/soal2.png", answer: "T" },
  { imgPath: "/assets/images/card/quiz/soal3.png", answer: "F" },
];

const quizImage = document.getElementById("quizImage");
const quizOption = document.getElementById("quizOption");
const selanjutnyaBtn = document.getElementById("selanjutnyaBtn");
const popUp = document.getElementById("popUp");
const popUpImage = document.getElementById("popUpImage");
const closePopUp = document.getElementById("closePopUp");

let Soal;

function RandomSoalList() {
  return soalList[Math.floor(Math.random() * soalList.length)];
}

function LoadQuizOption(jawabanBenar) {
  let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let quizOption = [jawabanBenar];
  while (quizOption.length < 4) {
    let random = huruf[Math.floor(Math.random() * huruf.length)];
    if (!quizOption.includes(random)) quizOption.push(random);
  }
  return quizOption.sort(() => Math.random() - 0.5);
}

function LoadSoalList() {
  selanjutnyaBtn.classList.add("hidden");
  quizOption.innerHTML = "";
  Soal = RandomSoalList();
  quizImage.src = Soal.imgPath;

  let quizList = LoadQuizOption(Soal.answer);
  quizList.forEach(huruf => {
    let btn = document.createElement("button");
    btn.innerText = huruf;
    btn.className = "optionButton px-4 py-2 rounded-lg bg-gradient-to-r from-[#D6E4F3] to-[#8EC3F7]";
    btn.onclick = () => checkJawaban(huruf, btn);
    quizOption.appendChild(btn);
  });
}

function checkJawaban(jawaban, btn) {
  let buttons = document.querySelectorAll(".optionButton");
  buttons.forEach(b => b.disabled = true);

  if (jawaban === Soal.answer) {
    btn.classList.remove("from-[#D6E4F3]", "to-[#8EC3F7]");
    btn.classList.add("from-[#7FC057]", "to-[#AEE78B]");
    showPopUp("/assets/images/card/quiz/benar.png");
  } else {
    btn.classList.remove("from-[#D6E4F3]", "to-[#8EC3F7]");
    btn.classList.add("from-[#E18787]", "to-[#E14646]");

    buttons.forEach(b => {
      if (b.innerText === Soal.answer) {
        b.classList.remove("from-[#D6E4F3]", "to-[#8EC3F7]");
        b.classList.add("from-[#AEE78B]", "to-[#7FC057]");
      }
    });

    showPopUp("/assets/images/card/quiz/salah.png");
  }

  selanjutnyaBtn.classList.remove("hidden");
}

function showPopUp(imgPath) {
  popUp.classList.remove("hidden");
  popUpImage.src = imgPath;
}

closePopUp.onclick = () => {
  popUp.style.animation = "fadeIn 0.2s ease-out reverse";
  setTimeout(() => {
    popUp.classList.add("hidden");
    popUp.style.animation = "";
    LoadSoalList();
  }, 200);
};

selanjutnyaBtn.onclick = () => {
  LoadSoalList();
};

LoadSoalList();