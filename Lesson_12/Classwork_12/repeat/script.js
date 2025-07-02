// DOM methods
// методы работы с глобальным объектом документ
// этот объект содержит всю информацию об элементах и их свойствах на странице

console.dir(document); // тут в объекте находится ВСЁ что на странице есть

// можно в ручную находить сво-во этого объекта и изменять их но это не удобно 🫣
// console.dir(document.body.children[0].textContent);
// console.dir(document.body.children[1].children[1].textContent);

// ! DOM methods

// чтобы удобно взаимодействовать с html элементами
// нам нужно уметь их находить и изменять
// для этого у нас есть методы поиска
// ! Нашли кнопки - счётчик
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const counterValue = document.querySelector("#counter");

// console.log(btnPlus);
// console.log(btnMinus);
// console.log(counterValue);

// ! counter

let counter = 0;

// присваиваем новое значение для данных на странице
counterValue.textContent = counter;
btnPlus.textContent = "плюс"; // изменили текст контент
btnMinus.textContent = "минус"; // изменили текст контент

const handlePlus = () => {
  // увеличеваем counter на один
  counter++;
  // меняем текст на значение переменной
  counterValue.textContent = counter;
};

const handleMinus = () => {
  counter--;
  counterValue.textContent = counter;
};

// создаём слушатель события для кнопки
// это способ сделать элемент интерактивный
// addEventListener - добавить слушатель событий
// btnPlus.addEventListener("click", () => {});
btnPlus.addEventListener("click", handlePlus);
btnMinus.addEventListener("click", handleMinus);

// handlePlus();
// handlePlus();
// console.log(counter);

// ! DOM practice
// метод поиска
const heading = document.querySelector("h1");
console.log(heading);
// подробная информация о найденом элементе
console.dir(heading);
// изменили текст контент
// heading.textContent = 'Функции и DOM'
// создали новый класс
// heading.className = 'heading'

heading.addEventListener("click", () => {
  heading.textContent = "Функции и DOM";
  heading.className = "heading";
  // создаём новый элемент
  const p = document.createElement("p");
  // добавляем элементу текст
  p.textContent = 'Этот элемент мы добавили через метод .creatteElement()'
  console.log(p);
  // добавили элемент на страницу
  document.body.append(p);
});
