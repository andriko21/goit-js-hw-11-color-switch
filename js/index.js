import background from "./colors.js";

let colorSwitchID;

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const chooseColor = (index) => background[index];
const randomColorBody = () =>
  (refs.body.style.backgroundColor = chooseColor(
    randomIntegerFromInterval(0, 5)
  ));

function onStartBtnClick() {
  refs.startBtn.removeEventListener("click", onStartBtnClick);
  colorSwitchID = setInterval(randomColorBody, 1000);
  refs.stopBtn.addEventListener("click", onStopBtnClick);
  refs.startBtn.disabled = true;

}
refs.startBtn.addEventListener("click", onStartBtnClick);

function onStopBtnClick() {
  clearInterval(colorSwitchID);
  refs.stopBtn.removeEventListener("click", onStopBtnClick);
  refs.startBtn.addEventListener("click", onStartBtnClick);
  refs.startBtn.disabled = false;

}
