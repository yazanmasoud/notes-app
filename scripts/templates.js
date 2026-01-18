function getNotesTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})"><img src="./assets/icon/icons8-delete-48.png" alt=""></button></p>`;
}


function getTrashTemplate(indexNote) {
    return `<p> ${trashNotes[indexNote]} <button onclick="restoreNote(${indexNote})"><img src="./assets/icon/icons8-reload-30.png" alt=""></button></p>`;
}