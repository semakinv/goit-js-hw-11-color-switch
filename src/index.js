import './styles.css';
function CountdownTimer(selector, targetDate) {
  //Создание шаблонной мстроки для разметки
  const htmlStringOfItem = `<div class="timer" id="${selector.selector}">
      <div class="field">
        <span class="value" data-value="days">--</span>
        <span class="label">Days</span>
      </div>

      <div class="field">
        <span class="value" data-value="hours">--</span>
        <span class="label">Hours</span>
      </div>

      <div class="field">
        <span class="value" data-value="mins">--</span>
        <span class="label">Minutes</span>
      </div>

      <div class="field">
        <span class="value" data-value="secs">--</span>
        <span class="label">Seconds</span>
      </div>
    </div>`;

  //Добавление разметки
  const ul = document.querySelector('body');
  ul.insertAdjacentHTML('afterbegin', htmlStringOfItem);

  // Определение ссылок
  const refs = {};

  const parentNode = document.getElementById(selector.selector);
  const selectedById = parentNode.querySelectorAll('.value');
  for (let i = 0; i < selectedById.length; i++) {
    if (selectedById[i].dataset.value === 'days') {
      refs.daysRef = selectedById[i];
    } else if (selectedById[i].dataset.value === 'hours') {
      refs.hoursRef = selectedById[i];
    } else if (selectedById[i].dataset.value === 'mins') {
      refs.minsRef = selectedById[i];
    } else if (selectedById[i].dataset.value === 'secs') {
      refs.secsRef = selectedById[i];
    }
  }

  // Функционал таймера

  function timer() {
    const timerFunctional = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = selector.targetDate - startTime;
      updateClockface(deltaTime);
    }, 1000);
  }

  function updateClockface(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.daysRef.textContent = days;
    refs.hoursRef.textContent = hours;
    refs.minsRef.textContent = mins;
    refs.secsRef.textContent = secs;

    //Функционал отрисовки множественного числа Day-Days

    if (days == 1) {
      refs.daysRef.nextElementSibling.textContent = 'Day';
    } else {
      refs.daysRef.nextElementSibling.textContent = 'Days';
    }

    if (hours == 1) {
      refs.hoursRef.nextElementSibling.textContent = 'Hour';
    } else {
      refs.hoursRef.nextElementSibling.textContent = 'Hours';
    }

    if (mins == 1) {
      refs.minsRef.nextElementSibling.textContent = 'Minute';
    } else {
      refs.minsRef.nextElementSibling.textContent = 'Minutes';
    }

    if (secs == 1) {
      refs.secsRef.nextElementSibling.textContent = 'Second';
    } else {
      refs.secsRef.nextElementSibling.textContent = 'Seconds';
    }
  }
  function pad(value) {
    return String(value).padStart(2, '0');
  }
  timer();
}

// Создание таймеров
const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('aug 17, 2019'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 18, 2020'),
});
const timer3 = new CountdownTimer({
  selector: '#timer-3',
  targetDate: new Date('Jul 17, 2025'),
});
