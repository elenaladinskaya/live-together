const liveTogether = [
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

function getArrayRandomIndex(array) {
  const random = Math.floor(Math.random() * array.length);
  return random;
}

resultBtn.addEventListener('click', e => {
  e.preventDefault();

  const randomItem = liveTogether[getArrayRandomIndex(liveTogether)];

  result.style.display = 'block';
  result.innerHTML = `
  <a href="#" id="closeBtn" class="close-btn"></a>
  <b>План:</b> "${randomItem.id}"<br> 
  <b>Место:</b> ${randomItem.place} <br>
  <b>Я:</b> ${randomItem.me} <br>
  <b>Ты:</b> ${randomItem.you} <br>
  `;

  resultBtn.classList.add('disabled');
  resultBtn.disabled = true;
  resultBtn.innerText = 'Результат ▼';

  const closeBtn = document.getElementById('closeBtn');

  closeBtn.addEventListener('click', e => {
    e.preventDefault();

    console.log('hi');

    result.style.display = 'none';
    resultBtn.classList.remove('disabled');
    resultBtn.innerText = 'Рандомный вариант';
    resultBtn.disabled = false;
  });
});