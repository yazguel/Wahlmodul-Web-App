// Bewerbungen laden
let bewerbungen = JSON.parse(localStorage.getItem("bewerbungen")) || {
    ip: [],
    mp: [],
    va: [],
    vb: []
};

function goTo(url) {
    window.location.href = url;
}


// Kategorien rendern
document.querySelectorAll(".bewerbung-kategorie").forEach(kat => {
    const modul = kat.dataset.modul;
    const liste = kat.querySelector(".bewerbung-liste");

    bewerbungen[modul].forEach((b, index) => {
        const item = document.createElement("div");
        item.classList.add("bewerbung-item");
        item.draggable = true;
        item.dataset.index = index;

        item.innerHTML = `
            <span>${b.kurs}</span>
            <div class="bewerbung-actions">
                <button class="edit-btn" onclick="editBewerbung('${modul}', ${index})">Überarbeiten</button>
                <button class="delete-btn" onclick="deleteBewerbung('${modul}', ${index})">Löschen</button>
            </div>
        `;

        // Drag & Drop
        item.addEventListener("dragstart", () => {
            item.classList.add("dragging");
        });

        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
            updateOrder(modul, liste);
        });

        liste.appendChild(item);
    });

    // Drop-Ziel
    liste.addEventListener("dragover", e => {
        e.preventDefault();
        const dragging = liste.querySelector(".dragging");
        const after = getDragAfterElement(liste, e.clientY);
        if (after == null) {
            liste.appendChild(dragging);
        } else {
            liste.insertBefore(dragging, after);
        }
    });
});

// Drag-Helfer
function getDragAfterElement(container, y) {
    const items = [...container.querySelectorAll(".bewerbung-item:not(.dragging)")];
    return items.find(item => {
        const box = item.getBoundingClientRect();
        return y < box.top + box.height / 2;
    });
}

// Reihenfolge aktualisieren
function updateOrder(modul, liste) {
    const newOrder = [...liste.querySelectorAll(".bewerbung-item")]
        .map(item => bewerbungen[modul][item.dataset.index]);

    bewerbungen[modul] = newOrder;
}

// Überarbeiten
function editBewerbung(modul, index) {
    window.location.href = `bewerben.html?modul=${modul}&edit=${index}`;
}


// Löschen
function deleteBewerbung(modul, index) {
    bewerbungen[modul].splice(index, 1);
    localStorage.setItem("bewerbungen", JSON.stringify(bewerbungen));
    location.reload();
}

// Speichern
document.querySelector(".save-btn").onclick = () => {
    localStorage.setItem("bewerbungen", JSON.stringify(bewerbungen));
    alert("Gespeichert!");
};

document.querySelectorAll(".bewerbung-kategorie").forEach(kat => {
    kat.addEventListener("click", () => {
        kat.classList.toggle("open");
    });
});

document.querySelectorAll(".bewerbung-actions button").forEach(btn => {
    btn.addEventListener("click", e => {
        e.stopPropagation();
    });
});
