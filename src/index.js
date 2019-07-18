const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
  bodyRef: document.querySelector('body'),
};

let savedIndex = []; // переменная для хранения предыдущего индекса цвета

//Функционал переключателя
const swither = {
  isActive: false, //метка активности кнопки

  //функционал кнопки старт
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.colorSwitch = setInterval(() => {
      updateBackgroundColor();
    }, 1000);
  },
  //функционал кнопки стоп
  stop() {
    clearInterval(this.colorSwitch);
    this.isActive = false;
    //Для сброса фона при остановке - раскомментировать строку ниже
    //refs.bodyRef.style.backgroundColor = null;
  },
};
//Привязка к интерфейсу
refs.startBtn.addEventListener('click', swither.start.bind(swither));
refs.stopBtn.addEventListener('click', swither.stop.bind(swither));
//Функционал обновления цвета по случайному идентификатору цвета
function updateBackgroundColor() {
  const indexOfColor = checkNumber();
  refs.bodyRef.style.backgroundColor = colors[indexOfColor];
  savedIndex = indexOfColor; //Сохранение индекса текущего цвета для последующей проверки
}

//В задании указано, что цвет должен менятся каждую секунду. В случае, если цвет совпадает с предыдущим то изменение фона не произойдет и интервал увеличится
// Функционал генерации случайного числа с проверкой на совпадение с предыдущим числом
function checkNumber() {
  //генератор случайных чисел
  const randomIntegerFromInterval = (min, max) => {
    const currentIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return currentIndex;
  };
  //функционал проверки на совпадения
  let currentIndexOfColor = randomIntegerFromInterval(0, colors.length - 1);
  while (currentIndexOfColor === savedIndex) {
    currentIndexOfColor = randomIntegerFromInterval(0, colors.length - 1);
  }
  return currentIndexOfColor;
}
