/* ---------- NOTE TEMPLATE ---------- */
function getNotesTemplate(index) {
    return `<div class="SingleNote">
              <h3>${allNotes.notes[index].title}</h3>
              <p>${allNotes.notes[index].text}
              <button onclick="moveNotes(${index} , 'notes' , 'archiveNotes')"><img src="./assets/icon/icons8-save-50.png"></button>

              <button onclick="moveNotes(${index} , 'notes' , 'trashNotes')">
              <img src="./assets/icon/icons8-delete-48.png"></button>
              </p>
            </div>`;
}


/* ---------- TRASH TEMPLATE ---------- */
function getArchiveTemplate(index) {
    return `<div class="SingleNote">
              <h3>${allNotes.archiveNotes[index].title}</h3>
              <p>${allNotes.archiveNotes[index].text}
              <button onclick="moveNotes(${index} , 'archiveNotes' , 'notes')">
              <img src="./assets/icon/icons8-refresh-32.png" alt="refresh icon"></button>
              <button onclick="moveNotes(${index} , 'archiveNotes' , 'trashNotes')">
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