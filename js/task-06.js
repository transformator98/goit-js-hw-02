let input;
const numbers = [];
let total = 0;

// const valueInpurRef = document.querySelector(".js-value");
// const addBtn = document.querySelector(".js-add-value");
// const calcBtn = document.querySelector(".js-calculate");

// addBtn.addEventListener("click", function () {
//   const value = Number(valueInpurRef.value);
//   numbers.push(value);
//   valueInpurRef.value = ""; //перезаписывает
//   console.log(numbers);
// });
// calcBtn.addEventListener("click", function () {
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// });
do {
  input = prompt("Введите число!");
  if (input === null) {
    console.log("Отмена пользователем!");
    break;
  }

  input = Number(input);
  numbers.push(input);
} while (input !== null);

for (const number of numbers) {
  total += number;
}
if (numbers.length > 0) {
  console.log(`Общая сумма чисел равна ${total}`);
}
