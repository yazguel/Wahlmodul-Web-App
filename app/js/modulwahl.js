// URL Parameter auslesen
const params = new URLSearchParams(window.location.search);
const modul = params.get("modul");

// Titel setzen
document.getElementById("modul-title").textContent = kursDaten[modul].titel;

// Kursliste-Container
const list = document.querySelector(".course-list");

// Funktion zum Rendern der Kurse
function renderKurse() {
    list.innerHTML = ""; // Liste leeren

    // Ausgewählte Tags sammeln
    const checkedTags = [...document.querySelectorAll(".tag-filter input:checked")]
        .map(cb => cb.value);

    kursDaten[modul].kurse
        .filter(kurs => {
            // Wenn keine Tags ausgewählt → alles anzeigen
            if (checkedTags.length === 0) return true;

            // Prüfen, ob Kurs mindestens einen ausgewählten Tag hat
            return kurs.tags.some(tag => checkedTags.includes(tag));
        })
        .forEach((kurs, kursIndex) => {
            const card = document.createElement("div");
            card.classList.add("course-card", "dropdown");
            card.onclick = () => toggleDropdown(card);

            card.innerHTML = `
                <img src="${kurs.bild}" class="course-img">

                <div class="tags">
                    ${kurs.tags.map(t => `<span>${t}</span>`).join("")}
                </div>

                <h2>${kurs.name}</h2>

                <div class="dropdown-content">
                    <div class="beschreibung-lang">
                        ${kurs.beschreibungLang.replace(/\n/g, "<br>")}
                    </div>

                    <button class="apply-btn" onclick="event.stopPropagation(); goTo('bewerben.html?modul=${modul}&kurs=${kursIndex}')">
                        Bewerben
                    </button>


                </div>      
            `;

            list.appendChild(card);
        });
}

// Beim Laden direkt rendern
renderKurse();

// Event Listener für Tag-Filter
document.querySelectorAll(".tag-filter input").forEach(cb => {
    cb.addEventListener("change", renderKurse);
});
