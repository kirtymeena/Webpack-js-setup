import generateJoke from "./generateJoke";
import "./styles/main.css"
console.log("generate", generateJoke());

const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    console.log("here's your data!!!")
})