console.log("Script was connection");
const dateSpan = document.getElementById("today");
const today = new Date;
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

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");
toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded")
    ? "Скрыть"
    : "Показать больше";
});

const projects = [
  {
    id: 1,
    title: "Лендинг кофейни",
    category: "frontend",
    description: "Адаптивная вёрстка на Flexbox",
  },
  {
    id: 2,
    title: "Бот для Telegram",
    category: "backend",
    description: "Python, обработка заказов",
  },
  {
    id: 3,
    title: "Игра 2048",
    category: "frontend",
    description: "Логика на чистом JS",
  },
  {
    id: 4,
    title: "№4",
    category: "design",
    description: "#4",
  },
  {
    id: 5,
    title: "#5",
    category: "frontend",
    description: "#5"
  }
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

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    const filtered =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);

    renderProjects(filtered);
  });
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(query),
  );
  renderProjects(filtered);
});
