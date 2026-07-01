// URL Parameter lesen
const params = new URLSearchParams(window.location.search);
const modul = params.get("modul");
const kursIndex = params.get("kurs");
// Kursdaten laden
const modulTitel = kursDaten[modul].titel;
const kurs = kursDaten[modul].kurse[kursIndex];
const kursTitel = kurs.name;

// Titel setzen
document.getElementById("modul-title").textContent = modulTitel;
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
    window.location.href = `modulwahl.html?modul=${modul}`;
}

// Fertig
function finishApplication() {
    // später: speichern + weiterleiten
    window.location.href = "meinebewerbungen.html";
}
