
const form = document.getElementById("chat-form");
const input = document.getElementById("message");
const chat = document.getElementById("chat");
const status = document.getElementById("status");
const welcome = document.getElementById("welcome");

status.textContent = "Interfaz lista";

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  chat.appendChild(message);
  return message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = input.value.trim();

  if (!question) return;

  welcome.style.display = "none";

  addMessage(question, "user");
  input.value = "";

  addMessage(
    "¡Hola! Soy TURBO. Mi interfaz ya está funcionando, " +
    "pero todavía estamos conectando mi motor de inteligencia artificial.",
    "turbo"
  );
});

