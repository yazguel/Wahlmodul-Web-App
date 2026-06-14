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

// wpm Auf-/Zuklappen der Jahre
function toggleYear(id) {
  const content = document.getElementById(id);
  const arrow = document.getElementById("arrow-" + id);
  content.classList.toggle("hidden");
  arrow.classList.toggle("open");
}
