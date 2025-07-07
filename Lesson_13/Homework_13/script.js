const exampleBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    genre: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1949",
    genre: "Fiction",
  },
];

// Если в localStorage нет ни одной книги — записываем примеры
if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(exampleBooks));
}

const form = document.getElementById("form-tasks");
const ul = document.getElementById("book-name");

// Загружаем книги из localStorage (всегда используем только его!)
function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

// Показываем все сохранённые книги
function renderBooks() {
  ul.innerHTML = ""; // очищаем список перед выводом
  const savedBooks = getBooks();
  savedBooks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `"${task.title}" от ${task.author} (${task.year}, ${task.genre})`;
    ul.append(li);
  });
}

// Отрисовываем книги при запуске
renderBooks();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  let task = {
    title: capitalizeWords(event.target.title.value),
    author: capitalizeWords(event.target.author.value),
    year: event.target.year.value, // здесь год лучше не капитализировать!
    genre: capitalizeWords(event.target.genre.value),
  };

  event.target.title.value = "";
  event.target.author.value = "";
  event.target.year.value = "";
  event.target.genre.value = "";

  // Загружаем книги из localStorage (актуальные!)
  const books = getBooks();

  // Проверка на дубликат
  const check = books.find(
    (el) =>
      el.title === task.title &&
      el.author === task.author &&
      el.year === task.year &&
      el.genre === task.genre
  );

  if (check) {
    alert("This is already in task list 🙅‍♂️");
  } else {
    books.push(task);
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks(); // обновляем отображение
  }
});
