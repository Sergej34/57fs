const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// 1.1 Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]

const namesAndisJedi = starWarsHeroes.map(
  (hero) => hero.name + ": " + hero.isJedi
);
// console.log(namesAndisJedi);

// 1.2 Создайте новый массив с джедаями младше 40 лет

const heroAge = starWarsHeroes.filter((hero) => hero.isJedi && hero.age < 40);
console.log(heroAge);

// 1.3 Посчитайте возраст всех джедаев

const sumOfAges = heroAge.reduce((acc, el) => acc + el.age, 0);
console.log(sumOfAges);

// 1.4 Повысьте возраст героев на 10 лет

heroAge.forEach((hero) => (hero.age += 10));
console.log(heroAge);

starWarsHeroes.forEach((hero) => (hero.age += 10));
console.log(starWarsHeroes);

// 1.5 Создайте новый массив, где "Anakin Skywalker" заменен на: { name: "Darth Vader", isJedi: false, age: 50 }

const replaceAnkinSkywalker = (heroes) =>
  heroes.map((hero) => {
    if (hero.name === "Anakin Skywalker") {
      return { name: "Darth Vader", isJedi: false, age: 50 };
    } else {
      return hero;
    }
  });

console.log(replaceAnkinSkywalker(starWarsHeroes));

// Тернарный оператор
// условие ? значение_если_истина : значение_если_ложь
// const replaceAnakin = (heroes) =>
const replaceAnakin = starWarsHeroes.map((hero) =>
    hero.name === "Anakin Skywalker"
      ? { name: "Darth Vader", isJedi: false, age: 50 }
      : hero
  );
console.log(replaceAnakin);

// starWarsHeroes.map(hero =>
    hero.name === "Anakin Skywalker"
      ? { ...hero, name: "Darth Vader" }
      : hero
  ;

const replaced = starWarsHeroes.map(hero =>
    hero.name === "Luke Skywalker"
      ? { ...hero, name: "Darth Vader", isJedi: false, age: 50 }
      : hero
  );

  console.log(replaced);
  