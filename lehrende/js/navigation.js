function selectOption(card) {
  document.querySelectorAll(".option-card").forEach(option => {
    option.classList.remove("selected");
  });

  card.classList.add("selected");
}

// Wechselt zu einer anderen HTML-Seite
function goToPage(page) {
  window.location.href = page;
}