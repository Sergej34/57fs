// Задание 1
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
// Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните
// при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const names = ["Семен", "Иван", "Пётр", "Татьяна"];

const age = [18, 27, 74, 34];
let result = [];

for (i = 0; i < names.length; i++) {
  result.push(names[i] + " " + age[i] + " лет/годов");
}

console.log(result);

// Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив,
// в котором элементы идут в обратной последовательности.
// Используйте цикл, а не метод reversed()!
const reversedArrResult = [];

for(let i = result.length - 1; i >= 0; i--){
    reversedArrResult.push(result[i]);
}    

console.log(reversedArrResult);

// Задание 3
// Создайте пустой массив fruits.
// добавьте в массив следующие фрукты: "яблоко", "банан", "апельсин".
// Удалите последний элемент из массива и сохраните значение в переменной.
// Добавьте его в начало массива.
// Выведите fruits в консоль

const fruits = [];

fruits.push("яблоко");
fruits.push("банан");
fruits.push("апельсин");

const lastFruits = fruits.pop();

fruits.unshift(lastFruits);
console.log(fruits);

// Задание 4
// Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies
// Используя деструктуризацию заведите переменную под каждый элемент нового массива
// Выведите fruitsAndVeggies в консоль

const veggies = ["помидоры", "капуста", "паприка"];

const fruitsAndVeggies = [...fruits, ...veggies];

const[first, second, third, fourth, fifth, sixth] = fruitsAndVeggies;

console.log(fruitsAndVeggies);
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
console.log(sixth);
