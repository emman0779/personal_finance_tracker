const theMoneyIn = document.getElementById("thefirstMoneyModal");
const moneyModal = document.querySelector(".moneyModal");
const closeMoneyModal = document.querySelector("#closeMoneyModal");
const currentBalance = document.getElementById("currentBalance");
const amount = document.getElementById("amount");
// const submit = document.getElementById("submit");
const more = document.getElementById("moreness");
const moreContent = document.getElementById("moreContent");
const ekis = document.getElementById("eks");
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
    currentBalance.innerHTML = `&#8369 ${localStorage.getItem("totalBalance")}`;
  }
}
getBalance();

// function closeModal() {
//   moneyModal.style.display = "none";
// }

// submit.addEventListener("click", () => {
//   calcAmount();
//   closeModal();
//   amount.value = "";
// });

theMoneyIn.addEventListener("click", () => {
  moneyModal.style.display = "flex";
});

// closeMoneyModal.addEventListener("click", closeModal);

more.addEventListener("click", () => {
  moreContent.style.marginLeft = "0%";
  moreContent.style.transition = "1s";
});

ekis.addEventListener("click", () => {
  moreContent.style.marginLeft = "400%";
});
