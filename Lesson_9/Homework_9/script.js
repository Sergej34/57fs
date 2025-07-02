// 1. Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3. Выведите значение myNumber в консоль.

let number = 100 / (25 % 3);
console.log(number);

// 2. Создайте переменную myString и присвойте ей значение, которое является результатом конкатенации следующих строк: "Hello, ", "world", "!", и числа 2024. Выведите значение myString в консоль.

let string = "Hello" + "";
let string1 = " world";
let string2 = " ! ";
let myString = string + string1 + string2;
console.log(myString + 2024);

// 3. Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42. Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать.

let isHuman = 42 == "42";
console.log(isHuman);

// 4. Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число. Выведите значение myNumber в консоль.

let myNumber = parseInt("123smith");
console.log(myNumber);

// 1. **Создайте переменные `age` и `hasPassport`.**
//    Присвойте `age` значение 18, а `hasPassport` — `true`.

let age = 18;
let hasPassport = true;
console.log(hasPassport);

// 2. **С помощью тернарного оператора создайте переменную `canTravel`.**
//    В ней должно храниться строковое сообщение:

//    * если `age` больше или равно 18 и `hasPassport` равно `true`, то:
//      `"Вы можете путешествовать ✈️"`
//    * иначе:
//      `"Путешествие невозможно ❌"`

let canTravel =
  age >= 18 && hasPassport
    ? "Вы можете путешествовать ✈️"
    : "Путешествие невозможно ❌";
console.log(canTravel);

// ### **Задание 2**

// 1. **Создайте переменную `inputString` и присвойте ей значение `"500руб"`.**

let inputString = parseInt("500руб");
console.log(inputString);

// 1. **Создайте переменную `randomNumber`, в которой будет случайное целое число от 1 до 50.**

let randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);

// 3. **Проверьте, является ли число чётным (делится на 2 без остатка). Создайте переменную `isEven`, в которой будет результат сравнения.**

let isEven = randomNumber % 2 === 0;
console.log(isEven);


