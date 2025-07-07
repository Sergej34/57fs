// 1. Получение элементов
// Задание:
// В начале скрипта создай переменные и получи по id:

// форму

// список пользователей

// обе кнопки

// Проверь в консоли, что всё получилось (выведи каждую переменную через console.log).

const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

// console.log(formElement);



// form.addEventListener("submit", (event) => {
//   // убираем перезагрузку формы по умолчанию
//   event.preventDefault("Сработал submit!");
// });
// --------------------------------------------------
// 🟢 2. Добавление нового пользователя
// Задание:
// Сделай обработчик события для формы:

// при отправке формы НЕ перезагружай страницу,

// получи значения из полей,

// создай новый <li>, в котором текст: Имя (место)🥷🏻

// добавь этот <li> в список.

// ! Добавь обработчик события "submit" к форме
form.addEventlistener("submit", event => {
  // Отключи стандартное поведение (чтобы страница не перезагружалась)
  event.preventDefault();
});

// ! Получить значения из полей формы
// Они получают значения, которые ввёл пользователь в поля формы:

// event.target.nickname.value
// — это то, что пользователь написал в поле "Имя" (<input name="nickname">).

// event.target.place.value
// — это то, что пользователь написал в поле "местоположение" (<input name="place">).
const name = event.target.nickname.value;
const place = event.target.place.value;

// создай новый <li>, в котором текст: Имя (место)🥷🏻
const li = document.createElement("li");

// 4. создай новый <li>, в котором текст: Имя (место)🥷🏻
li.textContent = `${person.name} ${person.place}🥷🏻`;