import Notiflix from 'notiflix';
const form = document.querySelector(".form")
const delayEl = document.querySelector('[name="delay"]')
const stepEl = document.querySelector('[name="step"]')
const amountEl = document.querySelector('[name="amount"]')

form.addEventListener("submit", onSubmit())
console.log(amountEl.value)
function onSubmit(ev) {
    ev.preventDefault();
    console.log(amountEl.value)
    const amount = Number(amountEl.value)
    const step = Number(stepEl.value)
    let delay = Number(delayEl.value)
    for (let i = 0; i < amount; i += 1) {
            createPromise(i + 1, delay)
        .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay}) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delay += step;
    }
}
  
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve({position, delay})
            } else {
                rejected({position, delay})
            }
        },delay)
    })
}