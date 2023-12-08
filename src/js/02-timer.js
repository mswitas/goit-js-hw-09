import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
      const selectedDate = selectedDates[0];
    if (selectedDate < currentDate) {
        //window.alert('Please choose a date in the future');
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
        selectedTimestamp = selectedDate.getTime();
        startButton.removeAttribute('disabled');
    }         
  },
};

let selectedTimestamp; 
const startButton = document.querySelector('[data-start]');
const pickedDate = flatpickr('#datetime-picker', options);
startButton.addEventListener('click', (event) => {
    event.currentTarget.setAttribute('disabled', '');
    const secondsDisplay = document.querySelector('[data-seconds]');
    const minutessDisplay = document.querySelector('[data-minutes]');
    const hoursDisplay = document.querySelector('[data-hours]');
    const daysDisplay = document.querySelector('[data-days]');
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const currentTimestamp = currentDate.getTime();
      const ms = selectedTimestamp - currentTimestamp;
      const remainingTimeObject = convertMs(ms);
      secondsDisplay.innerHTML = addLeadingZero(remainingTimeObject.seconds);
      minutessDisplay.innerHTML = addLeadingZero(remainingTimeObject.minutes);
      hoursDisplay.innerHTML = addLeadingZero(remainingTimeObject.hours);
      daysDisplay.innerHTML = addLeadingZero(remainingTimeObject.days);
      const endOfTime = remainingTimeObject.days == 0 && remainingTimeObject.hours == 0 && remainingTimeObject.minutes == 0 && remainingTimeObject.seconds == 0;

      if (endOfTime) {
        clearInterval(intervalId);
      }

    }, 1000);

});


function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}
