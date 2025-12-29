const chat = document.getElementById("chat");
const startBtn = document.getElementById("startBtn");

// Solo mensajes de "me" (tú)
const messages = [
  { from: "me", text: "Hola amor, hoy no es un día cualquiera..." },
  { from: "me", text: "Estuve pensando en todo lo que hemos vivido estos últimos meses." },
  { from: "me", text: "En tus mensajes, tus risas raras, tus audios eternos y hasta tus dramas." },
  { from: "me", text: "Y llegué a una conclusión muy simple." },
  { from: "me", text: "Me haces muy feliz. Mucho más de lo que te imaginas." },
  { from: "me", text: "Gracias por estar, por aguantarme y por no soltarme." },
  { from: "me", text: "Te quiero con todo mi corazón. 💗", final: true }
];

let index = 0;
let isPlaying = false;

function createBubble(message) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", "me");
  if (message.final) bubble.classList.add("final");

  bubble.textContent = message.text;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}

function playConversation() {
  if (isPlaying) return;
  isPlaying = true;
  startBtn.classList.add("hidden");

  function showNext() {
    if (index >= messages.length) return;

    createBubble(messages[index]);
    index++;

   const delay = 2200 + Math.random() * 1000; // 2,2s a 3,2s
setTimeout(showNext, delay);

  }

  showNext();
}

startBtn.addEventListener("click", playConversation);
