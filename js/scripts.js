console.log("JS carregado!");

const loadMoreButton = document.getElementById("load-more");
const hiddenCards = document.querySelectorAll("#cards-container .card.hidden");

let showingAll = false; // estado inicial: só os 4 primeiros

loadMoreButton.addEventListener("click", () => {
  if (!showingAll) {
    // Mostrar todos
    hiddenCards.forEach(card => card.classList.remove("hidden"));
    loadMoreButton.textContent = "Mostrar menos";
    showingAll = true;
  } else {
    // Esconder de novo
    hiddenCards.forEach(card => card.classList.add("hidden"));
    loadMoreButton.textContent = "Todas as publicações";
    showingAll = false;
  }
});

