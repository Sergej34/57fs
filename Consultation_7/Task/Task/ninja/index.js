// Получаем элементы по id
const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

// Пустой массив пользователей
const persons = [];

// Очищает весь список <ul>
function clearList() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
}

// Удаляет первый элемент <li> из списка
function clearOne() {
  if (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
}

// Очищает поля формы после добавления пользователя
function clearInputs(event) {
  event.target.nickname.value = "";
  event.target.place.value = "";
}

// Переключает зачёркивание при клике на <li>
function changeStatus(event) {
  const li = event.target;
  if (li.style.textDecoration === "line-through") {
    li.style.textDecoration = "";
  } else {
    li.style.textDecoration = "line-through";
  }
}

// Добавляем обработчики для кнопок
clearBtnElement.addEventListener("click", clearList);
clearOneBtnElement.addEventListener("click", clearOne);

// Обработчик отправки формы
formElement.addEventListener("submit", function(event) {
  event.preventDefault();

  const nickname = event.target.nickname.value.trim();
  const place = event.target.place.value.trim();

  // Не добавлять пустых пользователей
  if (!nickname || !place) return;

  // Создаём объект пользователя и добавляем в массив
  const person = { name: nickname, place: place };
  persons.push(person);

  // Создаём <li>
  const li = document.createElement("li");
  li.textContent = `${person.name} ${person.place}🥷🏻`;
  li.addEventListener("click", changeStatus);

  // Добавляем <li> в <ul>
  listElement.appendChild(li);

  // Очищаем поля формы
  clearInputs(event);
});

