import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const promiseObject = { position: position, delay: delay }
      if (shouldResolve) {
        resolve(promiseObject);
      } else {
        reject(promiseObject);
      }
      
    }, delay);
  });
}



function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  const delayNum = Number(delay.value);
  const stepNum = Number(step.value);
  const amountNum = Number(amount.value); 
  let positon = 1;
  let loopDelay = delayNum;
  while (positon <= amountNum) {
    createPromise(positon, loopDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    positon++;
    loopDelay += stepNum;
  }
  
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
