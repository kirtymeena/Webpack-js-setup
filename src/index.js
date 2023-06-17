import "./styles/variables.css"
import "./styles/main.css"
import Validation from "./js/funtioncalCode/Validation"
import { calculateDays, calculateMonth, calculateYears } from "./js/funtioncalCode/CalculateAge"
// import Main from "./js/main"
// import Validate from "./js/Validate";

// const main = new Main();
// console.log(main)
// const validate = new Validate(40, 5, 1997);
// console.log(validate.validateDay())

const dayEle = document.getElementById("day")
const monthEle = document.getElementById("month")
const yearEle = document.getElementById("year")
const btn = document.getElementById("btn")
const dayError = document.getElementById('dayError')
const title = document.querySelectorAll('.title')
const resulyYear = document.querySelector('.dash-1')
const resultMonth = document.querySelector('.dash-2')
const resultDay = document.querySelector('.dash-3')

btn.addEventListener('click', (e) => {
    toggleAria()
    if (Validation({ dayEle: dayEle, monthEle: monthEle, yearEle: yearEle, dayError: dayError, title: title })() === "success") {
        resulyYear.innerHTML = calculateYears(yearEle.value)
        resultMonth.innerHTML = calculateMonth(monthEle.value)
        resultDay.innerHTML = calculateDays(dayEle.value, monthEle.value)
    }
})

const toggleAria = () => {
    btn.setAttribute('aria-pressed', true)
}

const keyboardAccessBtn = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
        toggleAria();

    }
}





