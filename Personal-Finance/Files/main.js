const theMoneyIn = document.getElementById("theMoneyIn");
const theMoneyOut = document.getElementById("theMoneyOut");
const moneyModal = document.querySelectorAll(".moneyModal");
const closeMoneyModalIn = document.getElementById("closeMoneyModalIn");
const closeMoneyModalOut = document.getElementById("closeMoneyModalOut");
const currentBalance = document.getElementById("currentBalance");
const myRecords = document.getElementById("moneyRecords");
const myMoneyIn = document.getElementById("myMoney");
const myMoneyOut = document.getElementById("myMoneyOut");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const note = document.getElementById("note");
const submit = document.getElementById("submit");
const submitOut = document.getElementById("submitOut");
const amountOut = document.getElementById("amountOut");
const categoryOut = document.getElementById("categoryOut");
const noteOut = document.getElementById("noteOut");
const theTotal = document.getElementById("totalBalance");
const graphIn = document.getElementById("barGraphIn");
const graphOut = document.getElementById("barGraphOut");
const show = document.getElementById("show");
const showOut = document.getElementById("showOut");
const more = document.getElementById("moreness");
const moreContent = document.getElementById("moreContent");
const ekis = document.getElementById("eks");
let theBalance = 0;
let myBalance = [];
let myBalanceOut = [];
let moneyOutBalance = 0;
let totalBalance = 0;

myMoneyIn.innerHTML = `&#8369 ${localStorage.getItem("balance")}`;
myMoneyOut.innerHTML = `&#8369 ${localStorage.getItem("outBalance")}`;
theTotal.innerHTML = `&#8369 ${localStorage.getItem("totalBalance")}`;
// setBalance();
// setBalanceOut();

let theCount = 0;
let theCountOut = 0;

submit.addEventListener("click", () => {
  calcAmount();
  closeModal();
  theData();
  setBalance();
  myMoneyIn.innerHTML = `&#8369 ${localStorage.getItem("balance")}`;
  graphIn.innerHTML += `
  <div class="hal halIn" id="so${theCount}">
  </div>
  `;
  amount.value = "";
  category.value = "";
  note.value = "";
  theTotal.innerHTML = `&#8369 ${localStorage.getItem("totalBalance")}`;
  theCount += 1;
  if (theCount > 4) {
    show.disabled = false;
    submit.disabled = true;
  } else {
    show.disabled = true;
  }
});

submitOut.addEventListener("click", () => {
  calcAmountOut();
  closeModal();
  theDataOut();
  setBalanceOut();
  graphOut.innerHTML += `
  <div class="hal halOut" id="to${theCountOut}">
  </div>
  `;
  amountOut.value = "";
  categoryOut.value = "";
  noteOut.value = "";
  myMoneyOut.innerHTML = `&#8369 ${localStorage.getItem("outBalance")}`;
  theTotal.innerHTML = `&#8369 ${localStorage.getItem("totalBalance")}`;
  theCountOut += 1;
  if (theCountOut > 9) {
    showOut.disabled = false;
    submitOut.disabled = true;
  } else {
    showOut.disabled = true;
  }
});

show.addEventListener("click", () => {
  const first = document.getElementById("so0");
  const second = document.getElementById("so1");
  const third = document.getElementById("so2");
  const fourth = document.getElementById("so3");
  const fifth = document.getElementById("so4");

  const barGraphing = document.getElementsByClassName("halIn");

  for (let i of barGraphing) {
    i.style.animation = "grow 1s";
  }

  let currentIn = JSON.parse(localStorage.getItem("data"));

  first.style.height = `${(currentIn[0][0] / totalBalance) * 200}%`;
  first.innerHTML = `
  <h1 class="halo">${currentIn[0][1]} ${(
    (currentIn[0][0] / totalBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  second.style.height = `${(currentIn[1][0] / totalBalance) * 200}%`;
  second.innerHTML = `
  <h1 class="halo">${currentIn[1][1]} ${(
    (currentIn[1][0] / totalBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  third.style.height = `${(currentIn[2][0] / totalBalance) * 200}%`;
  third.innerHTML = `
  <h1 class="halo">${currentIn[2][1]} ${(
    (currentIn[2][0] / totalBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  fourth.style.height = `${(currentIn[3][0] / totalBalance) * 200}%`;
  fourth.innerHTML = `
  <h1 class="halo">${currentIn[3][1]} ${(
    (currentIn[3][0] / totalBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  fifth.style.height = `${(currentIn[4][0] / totalBalance) * 200}%`;
  fifth.innerHTML = `
  <h1 class="halo">${currentIn[4][1]} ${(
    (currentIn[4][0] / totalBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
});

showOut.addEventListener("click", () => {
  const first = document.getElementById("to0");
  const second = document.getElementById("to1");
  const third = document.getElementById("to2");
  const fourth = document.getElementById("to3");
  const fifth = document.getElementById("to4");
  const six = document.getElementById("to5");
  const seven = document.getElementById("to6");
  const eight = document.getElementById("to7");
  const nine = document.getElementById("to8");
  const ten = document.getElementById("to9");

  let currentOut = JSON.parse(localStorage.getItem("dataOut"));

  const barGraphing = document.getElementsByClassName("halOut");

  for (let i of barGraphing) {
    i.style.animation = "grow 1s";
  }

  first.style.height = `${(currentOut[0][0] / moneyOutBalance) * 300}%`;
  first.innerHTML = `
  <h1 class="halo">${currentOut[0][1]} ${(
    (currentOut[0][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  second.style.height = `${(currentOut[1][0] / moneyOutBalance) * 300}%`;
  second.innerHTML = `
  <h1 class="halo">${currentOut[1][1]} ${(
    (currentOut[1][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  third.style.height = `${(currentOut[2][0] / moneyOutBalance) * 300}%`;
  third.innerHTML = `
  <h1 class="halo">${currentOut[2][1]} ${(
    (currentOut[2][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  fourth.style.height = `${(currentOut[3][0] / moneyOutBalance) * 300}%`;
  fourth.innerHTML = `
  <h1 class="halo">${currentOut[3][1]} ${(
    (currentOut[3][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  fifth.style.height = `${(currentOut[4][0] / moneyOutBalance) * 300}%`;
  fifth.innerHTML = `
  <h1 class="halo">${currentOut[4][1]} ${(
    (currentOut[4][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;

  six.style.height = `${(currentOut[0][0] / moneyOutBalance) * 300}%`;
  six.innerHTML = `
  <h1 class="halo">${currentOut[0][1]} ${(
    (currentOut[0][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  seven.style.height = `${(currentOut[1][0] / moneyOutBalance) * 300}%`;
  seven.innerHTML = `
  <h1 class="halo">${currentOut[1][1]} ${(
    (currentOut[1][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  eight.style.height = `${(currentOut[2][0] / moneyOutBalance) * 300}%`;
  eight.innerHTML = `
  <h1 class="halo">${currentOut[2][1]} ${(
    (currentOut[2][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  nine.style.height = `${(currentOut[3][0] / moneyOutBalance) * 300}%`;
  nine.innerHTML = `
  <h1 class="halo">${currentOut[3][1]} ${(
    (currentOut[3][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
  ten.style.height = `${(currentOut[4][0] / moneyOutBalance) * 300}%`;
  ten.innerHTML = `
  <h1 class="halo">${currentOut[4][1]} ${(
    (currentOut[4][0] / moneyOutBalance) *
    100
  ).toFixed(2)}%</h1>
  `;
});

function calcAmount() {
  theBalance += parseInt(amount.value);
  totalBalance += parseInt(amount.value);
  localStorage.setItem("balance", theBalance);
  localStorage.setItem("totalBalance", totalBalance);
}

function calcAmountOut() {
  moneyOutBalance += parseInt(amountOut.value);
  localStorage.setItem("outBalance", moneyOutBalance);
  totalBalance -= parseInt(amountOut.value);
  localStorage.setItem("totalBalance", totalBalance);
}
// myMoneyIn.innerHTML = `&#8369 ${localStorage.getItem("balance")}`;

function theData() {
  myBalance.push([amount.value, category.value, note.value]);
  localStorage.setItem("data", JSON.stringify(myBalance));
}

function theDataOut() {
  myBalanceOut.push([amountOut.value, categoryOut.value, noteOut.value]);
  localStorage.setItem("dataOut", JSON.stringify(myBalanceOut));
}

function setBalance() {
  let currentIn = JSON.parse(localStorage.getItem("data"));
  let myAmount = currentIn[myBalance.length - 1][0];
  let myNote = currentIn[myBalance.length - 1][1];
  let myCategory = currentIn[myBalance.length - 1][2];
  myRecords.innerHTML += `
  <div class='recordings'>
    <div>
      <h3>${myNote}</h3>
      <p>${myCategory}</p>
    </div>
    <h3 class='amounting'>+ &#8369 ${myAmount}</h3>
  </div>
  `;
}

function setBalanceOut() {
  let currentOut = JSON.parse(localStorage.getItem("dataOut"));
  let myAmountOut = currentOut[myBalanceOut.length - 1][0];
  let myNoteOut = currentOut[myBalanceOut.length - 1][1];
  let myCategoryOut = currentOut[myBalanceOut.length - 1][2];
  myRecords.innerHTML += `
  <div class='recordings'>
    <div>
      <h3>${myNoteOut}</h3>
      <p>${myCategoryOut}</p>
    </div>
    <h3 class='amountingOut'>- &#8369 ${myAmountOut}</h3>
  </div>
  `;
}

function closeModal() {
  moneyModal[0].style.display = "none";
  moneyModal[1].style.display = "none";
}

theMoneyIn.addEventListener("click", () => {
  moneyModal[0].style.display = "flex";
  let theHal = document.getElementsByClassName("hal");
  for (let i of theHal) {
    i.style.animation = "none";
  }
});

theMoneyOut.addEventListener("click", () => {
  moneyModal[1].style.display = "flex";
});

closeMoneyModalIn.addEventListener("click", closeModal);
closeMoneyModalOut.addEventListener("click", closeModal);

more.addEventListener("click", () => {
  moreContent.style.marginLeft = "0%";
  moreContent.style.transition = "1s";
});

ekis.addEventListener("click", () => {
  moreContent.style.marginLeft = "400%";
});
