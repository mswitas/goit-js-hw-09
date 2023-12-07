const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop');
let intervalId = null;

startButton.addEventListener('click', () => {
    startButton.setAttribute('disabled', '');
    intervalId = setInterval(() => {
        const bgColorHex = getRandomHexColor();
        document.body.style.backgroundColor = bgColorHex;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}