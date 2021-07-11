let liveTogether = [
  {
    id: "Б",
    place: "Воронеж, съемная квартира",
    me: "Работаю удаленно",
    you: "Работаешь в ВГУ или находишь новую работу"
  },
  {
    id: "В",
    place: "Питер, комната в коммуналке",
    me: "Работаю удаленно",
    you: "Ищешь стационарную работу"
  },
  {
    id: "Г",
    place: "Питер, моя квартира в ЛО",
    me: "Работаю удаленно",
    you: "Работаешь в Магните"
  },
  {
    id: "Ж",
    place: "Воронеж, твоя квартира",
    me: "Работаю стационарно в РЕСО",
    you: "Работаешь в ВГУ или находишь новую работу"
  },
]

const resultBtn = document.getElementById('resultBtn');
const result = document.getElementById('result');

function arrayRandElem(array) {
  const random = Math.floor(Math.random() * array.length);
  return random;
}

resultBtn.addEventListener('click', e => {
  e.preventDefault();

  const randomIndex = liveTogether[arrayRandElem(liveTogether)];

  result.style.display = 'block';
  result.innerHTML = `
  <b>План:</b> "${randomIndex.id}"<br> 
  <b>Место:</b> ${randomIndex.place} <br>
  <b>Я:</b> ${randomIndex.me} <br>
  <b>Ты:</b> ${randomIndex.you} <br>
  `;

  resultBtn.classList.add('btnDisabled');
  resultBtn.innerText = 'Результат ▼';
}, { once: true });

