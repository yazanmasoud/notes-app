let notes = [];
let trashNotes = [];

/* ---------- Render note ---------- */
function rendNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += getNotesTemplate(i);
    }
}

/* ---------- Rrnder trash ---------- */
function rendTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = '';

    for (let i = 0; i < trashNotes.length; i++) {
        trashContentRef.innerHTML += getTrashTemplate(i);
    }
}


/* ---------- Add note ---------- */
function addNote() {
    let noteInputRef = document.getElementById('noteInputRef');
    let titleInputRef = document.getElementById('titleInputRef');

    if (noteInputRef.value.length > 0 && titleInputRef.value.length > 0) {
        const title = titleInputRef.value;
        const text = noteInputRef.value;
        notes.push({ title, text });


        saveToLocalStorage();
        rendNotes();

        noteInputRef.value = '';
        titleInputRef.value = '';
    }
}


/* ---------- Move to trash ---------- */
function moveToTrash(index) {
    trashNotes.push(notes[index]);
    notes.splice(index, 1);

    saveToLocalStorage();
    rendNotes();
    rendTrashNotes();
}


/* ---------- Restore note ---------- */
function restoreNote(index) {
    notes.push(trashNotes[index]);
    trashNotes.splice(index, 1);

    saveToLocalStorage();
    rendNotes();
    rendTrashNotes();
}


/* ---------- Delete trash ---------- */
function deletTrash() {
    trashNotes = [];
    saveToLocalStorage();
    rendTrashNotes();
}


/* ---------- Save in localstorage ---------- */
function saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes)); /* save every item in the note-array as a string */
    localStorage.setItem('trash', JSON.stringify(trashNotes));/* save every item in the trash-array as a string */
}


/* ---------- Load from localstorage ---------- */
function loadFromLocalStorage() {
    const savedNotes = localStorage.getItem('notes'); /* gets every saved string from the note-array from saveToLocalStorage() */
    const savedTrash = localStorage.getItem('trash');/* gets every saved string from the trash-array from saveToLocalStorage() */

    if (savedNotes !== null) { /* test if there is any saved string in the notes */
        notes = JSON.parse(savedNotes); /* return this string to array item to show it at the rendNotes() */
    }

    if (savedTrash !== null) { /* test if there is any saved string in the trashnotes */
        trashNotes = JSON.parse(savedTrash); /* return this string to array item to show it at the rendTrashNotes()  */
    }
    rendNotes();
    rendTrashNotes();
}
