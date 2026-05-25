console.log("JS carregado!");

const carregarBotaoLoad = document.getElementById("load-more");
const cardsOcultos = document.querySelectorAll("#cards-container .card.hidden");

let mostrarTodos = false; // estado inicial: só os 4 primeiros

carregarBotaoLoad.addEventListener("click", () => {
  if (!mostrarTodos) {
    // Mostrar todos
    cardsOcultos.forEach((card) => card.classList.remove("hidden"));
    carregarBotaoLoad.textContent = "Mostrar menos";
    showingAll = true;
  } else {
    // Esconder de novo
    cardsOcultos.forEach((card) => card.classList.add("hidden"));
    carregarBotaoLoad.textContent = "Todas as publicações";
    showingAll = false;
  }
});
