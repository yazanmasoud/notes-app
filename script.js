
let allNotes = {
    'notes': [],
    'notesTitle' : [],
    'trashNotes' : [],
    'archiveNotes' : []
}


function moveNotes(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    saveToLocalStorage();
    rendNotes();
    rendTrashNotes();
}


/* ---------- Render note ---------- */
function rendNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let i = 0; i < allNotes.notes.length; i++) {
        contentRef.innerHTML += getNotesTemplate(i);
    }

}


/* ---------- Render trash ---------- */
function rendTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = '';

    for (let i = 0; i < allNotes.trashNotes.length; i++) {
        trashContentRef.innerHTML += getTrashTemplate(i);
    }

}


/* ---------- Add note ---------- */
function addNote() {
    let noteInputRef = document.getElementById('noteInputRef');
    let titleInputRef = document.getElementById('titleInputRef');

    if (noteInputRef.value.length > 0 && titleInputRef.value.length > 0) {
        allNotes.notes.push({
            title: titleInputRef.value,
            text: noteInputRef.value
        });

        saveToLocalStorage();
        rendNotes();
        noteInputRef.value = '';
        titleInputRef.value = '';
    }
}


/* ---------- Delete trash ---------- */
function deletTrash() {
    allNotes.trashNotes = [];
    saveToLocalStorage();
    rendTrashNotes();
}


/* ---------- Save in localstorage ---------- */
function saveToLocalStorage() {
    localStorage.setItem('allNotes', JSON.stringify(allNotes)); /* save every item in the note-array as a string */
}


/* ---------- Load from localstorage ---------- */
function loadFromLocalStorage() {
    const saved = localStorage.getItem('allNotes'); /* gets every saved string from the note-array from saveToLocalStorage() */

    if (saved !== null) { /* test if there is any saved string in the notes */
        allNotes = JSON.parse(saved); /* return this string to array item to show it at the rendNotes() */
    }

    rendNotes();
    rendTrashNotes();
}

