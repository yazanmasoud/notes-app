/* ---------- NOTE TEMPLATE ---------- */
function getNotesTemplate(index) {
    return `<div class="SingleNote">
              <h3>${allNotes.notes[index].title}</h3>
              <p>${allNotes.notes[index].text}
              <button onclick="moveNotes(${index} , 'notes' , 'trashNotes')">
              <img src="./assets/icon/icons8-delete-48.png"></button>
              </p>
            </div>`;
}

function getArchiveTemplate(index) {
    return `<div class="SingleNote">
              <h3>${allNotes.notes[index].title}</h3>
              <p>${allNotes.notes[index].text}
              <button onclick="moveNotes(${index} , 'notes' , 'archiveNotes')">
              <img src="./assets/icon/icons8-delete-48.png"></button>
              </p>
            </div>`;
}



/* ---------- TRASH TEMPLATE ---------- */
function getTrashTemplate(index) {
    return `<p>${allNotes.trashNotes[index].title}
              –${allNotes.trashNotes[index].text}
              <button onclick="moveNotes(${index} , 'trashNotes' , 'notes')">
              <img src="./assets/icon/icons8-reload-30.png">
              </button>
            </p>`;
}