// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Введите число!");
//   numbers.push(input);
//   console.log(numbers);

//   if (input === null) {
//     break;
//   }
// } while (true);
// for (const number of numbers) {
//   const i = Number(number);
//   total += i;
//   if (total === 0) {
//     console.log(`Вы не ввели число!`);
//   }
// }
// console.log(`Общая сумма чисел равна ${total}`);

let input;
const numbers = [];
let total = 0;

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
