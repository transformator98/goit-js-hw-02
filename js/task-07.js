const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const allLogins = [];
let login;
const valueInpurRef = document.querySelector(".js-value");
const addBtn = document.querySelector(".js-add-value");

addBtn.addEventListener("click", function () {
  const login = valueInpurRef.value;
  allLogins.push(login);
  valueInpurRef.value = ""; //перезаписывает
  console.log(allLogins);
});

const isLoginValid = function (login) {
  if (login.length > 4 && login.length < 16) {
    console.log(true);
  } else {
    console.log("Длина пароля должна быть от 4 до 16 символов!");
  }
};

const isLoginUnique = function (allLogins, login) {
  for (login of allLogins) {
    console.log(login);
  }
};

// const addLogin = function (allLogins, login) {
//     // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
