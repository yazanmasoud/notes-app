/* ---------- NOTE TEMPLATE ---------- */
function getNotesTemplate(index) {
    return `<div class="SingleNote"><h3>${notes[index].title}</h3><p>${notes[index].text}<button onclick="moveToTrash(${index})"><img src="./assets/icon/icons8-delete-48.png"></button></p></div>`;
}

/* ---------- TRASH TEMPLATE ---------- */
function getTrashTemplate(index) {
    return `<p>${trashNotes[index].title} – ${trashNotes[index].text}<button onclick="restoreNote(${index})"><img src="./assets/icon/icons8-reload-30.png"></button></p>`;
}
