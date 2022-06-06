import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const btn = document.querySelector("[data-start]")
// const timers = document.querySelector(".timer")
const days = document.querySelector("[data-days]")
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes]")
const seconds = document.querySelector("[data-seconds]")
const data = new Date().getTime();
btn.setAttribute("disabled", true)
let difference = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (data < selectedDates[0].getTime()) {
            btn.removeAttribute("disabled")
        } else {
           Notiflix.Notify.failure("Please choose a date in the future")
        }
   
  },
};
 const fp =  flatpickr("#datetime-picker", options);

btn.addEventListener("click",timer)

function timer() {
    setInterval(step,1000)
}

function step() {
    difference = fp.selectedDates[0].getTime() - new Date().getTime()
    const timeArr = convertMs(difference)
    informationTimer(timeArr)
    // for (const time in timeArr) {
    //     const name = document.querySelector(`[data-${time}]`)
    //     const value = timeArr[time]
    //     name.textContent = addLeadingZero(value)
    // }
}
function informationTimer(el){
    days.textContent = addLeadingZero(el.days)
    hours.textContent = addLeadingZero(el.hours)
    minutes.textContent = addLeadingZero(el.minutes)
    seconds.textContent = addLeadingZero(el.seconds)
}

function addLeadingZero(value) {
    return String(value).padStart(2,"0")
}

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
