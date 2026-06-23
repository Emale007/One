console.log("Script was connection");
const dateSpan = document.getElementById("update-date");
const today = new Date;
dateSpan.textContent = today.toLocaleDateString("ru-RU");