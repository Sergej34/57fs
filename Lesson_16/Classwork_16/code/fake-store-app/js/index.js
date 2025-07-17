// пример с then
// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((arr) => {
//     console.log(arr);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const productsList = document.getElementById("products-list");



// объявим асинхронную функцию
async function fetchProducts() {
  // responce - отклик, ответ
  // fetch нам вернёт promise - мы его await-ом раскроем и положим в переменную - responce
  // await - это синтаксический сахар более удобней then
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await res.json();
  console.log(products);
  products.forEach((product) => {
    const {title, description, images } = product;

    const productCard = document.createElement("li");
    productCard.classList.add("product-card");
    
    const titleEl = document.createElement("h2");
    const descriptionEl = document.createElement("p");
    const img = document.createElement("img");
    // content - содержание
    titleEl.textContent = title;
    descriptionEl.textContent = description; // description - описание
    img.src = images[0];

    productCard.append(titleEl, img, descriptionEl);

    productsList.appendChild(productCard);
  });
}

// не забудем вызвать функцию
fetchProducts();


// CRUD = Create Read Update Delete

