const registerForm = document.getElementById("register-form");
const messageEl = document.getElementById("message");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target.name.value);
  // console.log(event.target.email.value);
  // console.log(event.target.password.value);
  // console.log(event.target.avatar.value);

  const newUser = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
    avatar: event.target.avatar.value,
  };

  fetchRegister(newUser);
});

// запрос состоит из
// - url например: "https://api.escuelajs.co/api/v1/users"
// - он состоит их тела body - строка в формате JSON
// - заголовки headers - вспомогательная информация про сам запрос
// - чтобы сервер мог лучше нас понять
// - method - GET - для получения POST - для создания PUT DELETE 
async function fetchRegister(newUser) {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    messageEl.textContent = "Successfully registered!";
  } else {
    messageEl.textContent = "Registration error!";

  }
}
