// URL Parameter lesen
const params = new URLSearchParams(window.location.search);
const modul = params.get("modul");
const kursIndex = params.get("kurs");
const editIndex = params.get("edit");

// Kursdaten laden
let kursTitel;

// Wird bestehende Bewerbung bearbeitet?
if (editIndex !== null) {
    // Bewerbung aus localStorage laden
    const bewerbungen = JSON.parse(localStorage.getItem("bewerbungen"));
    const alteBewerbung = bewerbungen[modul][editIndex];

    kursTitel = alteBewerbung.kurs;

    // Motivation in Textfeld setzen
    document.getElementById("motivation").value = alteBewerbung.motivation;

} else {
    // Neue Bewerbung -> Kurs aus kursDaten laden
    const kurs = kursDaten[modul].kurse[kursIndex];
    kursTitel = kurs.name;
}

// Titel setzen
document.getElementById("modul-title").textContent = kursDaten[modul].titel;
document.getElementById("kurs-title").textContent = kursTitel;


// Popup öffnen
function openCancelPopup() {
    document.getElementById("cancel-popup").classList.remove("hidden");
}

// Popup schließen
function cancelNo() {
    document.getElementById("cancel-popup").classList.add("hidden");
}

// Abbrechen bestätigen
function cancelYes() {
    const editIndex = params.get("edit");

    if (editIndex !== null) {
        // Abbruch aus „Überarbeiten“ -> zurück zu Meine Bewerbungen
        window.location.href = "meinebewerbungen.html";
    } else {
        // normaler Abbruch -> zurück zur Modulauswahl
        window.location.href = `modulwahl.html?modul=${modul}`;
    }
}


// Fertige Bewerbung speichern/aktualisiern
function finishApplication() {
    // Motivation aus Textfeld auslesen
    const motivation = document.getElementById("motivation").value;

    // Bereits gespeicherte Bewerbungen aus localStorage laden
    let bewerbungen = JSON.parse(localStorage.getItem("bewerbungen")) || {
        ip: [],
        mp: [],
        va: [],
        vb: []
    };

    const editIndex = params.get("edit");

    if (editIndex !== null) {
        // bestehende Bewerbung überschreiben
        bewerbungen[modul][editIndex].motivation = motivation;
    } else {
        // neue Bewerbung hinzufügen
        bewerbungen[modul].push({
            kurs: kursTitel,
            motivation: motivation,
            prio: bewerbungen[modul].length + 1
        });
    }

    // Änderung speichern
    localStorage.setItem("bewerbungen", JSON.stringify(bewerbungen));

    window.location.href = "meinebewerbungen.html";
}


