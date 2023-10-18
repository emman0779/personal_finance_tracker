const theMoneyIn = document.getElementById("thefirstMoneyModal");
const moneyModal = document.querySelector(".moneyModal");
const closeMoneyModal = document.querySelector("#closeMoneyModal");
const currentBalance = document.getElementById("currentBalance");
const amount = document.getElementById("amount");
const submit = document.getElementById("submit");
let theBalance = 0;

function calcAmount() {
  theBalance += parseInt(amount.value);
  localStorage.setItem("balance", JSON.stringify(theBalance));
  getBalance();
}

function getBalance() {
  const finalBalance = JSON.parse(localStorage.getItem("balance"));
  if (finalBalance === null) {
    currentBalance.innerHTML = `&#8369 0`;
  } else if (finalBalance >= 0) {
    currentBalance.innerHTML = `&#8369 ${finalBalance}`;
  }
}
getBalance();

function closeModal() {
  moneyModal.style.display = "none";
}

submit.addEventListener("click", () => {
  calcAmount();
  closeModal();
  amount.value = "";
});

theMoneyIn.addEventListener("click", () => {
  moneyModal.style.display = "flex";
});

closeMoneyModal.addEventListener("click", closeModal);
