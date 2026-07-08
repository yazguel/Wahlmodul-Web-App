function selectOption(card) {
  document.querySelectorAll(".option-card").forEach(option => {
    option.classList.remove("selected");
  });

  card.classList.add("selected");
}

//wechsel KLV
function nextFromZuordnung() {

    const projekt = document.getElementById("projekt");
    const klv = document.getElementById("klv");

    if (projekt.checked) {
        window.location.href = "beschreibung.html";
    }

    else if (klv.checked) {
        window.location.href = "beschreibung_klv.html";
    }

    else {
        alert("Bitte wählen Sie zuerst einen Angebotstyp aus.");
    }
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

//Änderungen gespeichert button click event
function showSavedMessage() {

    const message = document.getElementById("saveMessage");

    message.classList.add("show");

    // Nach 3 Sekunden wieder ausblenden
    setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}

function showShortenedName() {
  const name = document.getElementById("shortenedName");

  if (document.getElementById("shortenedNameCheckbox").checked) {
    name.style.visibility = "visible";
  } else if (!document.getElementById("shortenedNameCheckbox").checked) {
    name.style.visibility = "collapse";
  }
}