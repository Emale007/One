const head = document.getElementById("HEAD");
const bio = document.getElementById("bio");
const story = document.getElementById("story");
const role = document.getElementById("role");
head.textContent = "Togor Dreemur";
bio.textContent = "О Тогоре";
story.textContent = "Истории из фандома";
role.textContent = "Роль в DELTARUNE";

console.log("Script was connection");

const dateSpan = document.getElementById("today");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");
burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const themeToggle = document.getElementById("theme-toggle");
const About = document.getElementById("about");
const Dark = document.getElementById("dark");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = document.body.classList.contains("dark-theme")
    ? "Dark"
    : "Свет";
  head.textContent = document.body.classList.contains("dark-theme")
    ? "Gaster"
    : "Togor Dreemur";
   bio.textContent = document.body.classList.contains("dark-theme")
     ? "Dark"
    : "О Тогоре";
   story.textContent = document.body.classList.contains("dark-theme")
     ? "Yet Darker"
     : "Истории из фандома";
   role.textContent = document.body.classList.contains("dark-theme")
     ? "Darker"
     : "Роль в DELTARUNE";
  About.classList.toggle("expanded");
  Dark.classList.toggle("expanded");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Введите корректный email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (isValid) {
    alert("Форма заполнена верно! (отправка на сервер не настроена)");
    form.reset();
  }
});

const projects = [
  { id: 1, title: "obj1", category: "frontend", description: "Это обьект №1" },
  { id: 2, title: "obj2", category: "frontend", description: "Это обьект №2" },
  { id: 3, title: "obj3", category: "frontend", description: "Это обьект №3" },
  { id: 4, title: "obj4", category: "frontend", description: "Это обьект №4" },
  { id: 5, title: "obj5", category: "frontend", description: "Это обьект №5" },
];

function createCard(project) {
  return `
    <article class="project-card" data-category="${project.category}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </article>
  `;
}

function renderProjects(list) {
  const container = document.getElementById("projects-grid");
  container.innerHTML = list.map(createCard).join("");
}

renderProjects(projects);
