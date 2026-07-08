// Alle gespeicherten Bewerbungen aus localStorage laden
// Kurse mit Bewerbungen ausgrauen bzw. später deaktivieren

let gespeicherteBewerbungen = JSON.parse(localStorage.getItem("bewerbungen")) || {
    ip: [],
    mp: [],
    va: [],
    vb: []
};

// URL Parameter auslesen
const params = new URLSearchParams(window.location.search);
const modul = params.get("modul");

// Titel setzen
document.getElementById("modul-title").textContent = kursDaten[modul].titel;

// Kursliste-Container
const list = document.querySelector(".course-list");

// CHIP-FILTER 
const chipContainer = document.querySelector(".tag-chips");

// Chips klickbar machen
chipContainer.querySelectorAll("span").forEach(chip => {
    chip.addEventListener("click", () => {
        chip.classList.toggle("active");
        renderKurse();
    });
});

// Ausgewählte Tags holen
function getSelectedTags() {
    return [...chipContainer.querySelectorAll(".active")]
        .map(chip => chip.dataset.tag);
}

// Kurse rendern
function renderKurse() {
    list.innerHTML = ""; // Liste leeren

    const checkedTags = getSelectedTags();

    kursDaten[modul].kurse
        // Nur Kurse anzeigen, die mindestens einen der ausgewählten Tags haben
        .filter(kurs => {
            if (checkedTags.length === 0) return true;
            return kurs.tags.some(tag => checkedTags.includes(tag));
        })
        .forEach((kurs, kursIndex) => {
            // gibts schon eine Bewerbung für diesen Kurs?2
            const bereitsBeworben = gespeicherteBewerbungen[modul]
                .some(b => b.kurs === kurs.name);

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

                ${bereitsBeworben
                    ? `<button class="apply-btn disabled-btn" disabled>Bereits beworben</button>`
                    : `<button class="apply-btn"
                        <!-- stopPropagation verhindert, dass das Dropdown geschlossen wird -->
                        onclick="event.stopPropagation(); goTo('bewerben.html?modul=${modul}&kurs=${kursIndex}')">
                        Bewerben
                    </button>`
                }
            </div>
            `;




            list.appendChild(card);
        }
        );
}

// Beim Laden direkt rendern
renderKurse();
