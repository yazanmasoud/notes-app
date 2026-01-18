let notes = [];
let notesTitle = [];
let trashNotes = [];


function getNotesTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})"><img src="./assets/icon/icons8-delete-48.png" alt=""></button></p>`;
}

function getTitleNoteTemplate(indexNote) {
        return `<h3> ${notesTitle[indexNote]} </p>`;

}

function getTrashTemplate(indexNote) {
    return `<p> ${trashNotes[indexNote]} <button onclick="restoreNote(${indexNote})"><img src="./assets/icon/icons8-reload-30.png" alt=""></button></p>`;
}

function rendNotes() {
    let contentRef = document.getElementById('content');
    let titleRef = document.getElementById('noteTitle');
    titleRef.innerHTML ='';
    contentRef.innerHTML = '';

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
        titleRef.innerHTML += getTitleNoteTemplate(indexNote);
    }
}


function rendTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = '';

    for (let indexNote = 0; indexNote < trashNotes.length; indexNote++) {
        trashContentRef.innerHTML += getTrashTemplate(indexNote);
    }
}


function addNote() {
    let noteInputRef = document.getElementById('noteInputRef');
    let titleInputRef = document.getElementById('titleInputRef');
    let inputRefValue = noteInputRef.value;
    let titleRefValue = titleInputRef.value
    if (inputRefValue.length > 0 && titleRefValue.length >0) {
        notes.push(inputRefValue);
        notesTitle.push(titleRefValue);
        saveToLocalStorage();
        rendNotes();
        noteInputRef.value = '';
        titleInputRef.value= '';

    }
}


function moveToTrash(indexNote) {
    trashNotes.push(notes[indexNote]);
    notes.splice(indexNote, 1);
    saveToLocalStorage();
    rendNotes();
    rendTrashNotes();
}

function restoreNote(TrashNoteIndex) {
    let ToRestoreNote = trashNotes.splice(TrashNoteIndex, 1);
    notes.push(ToRestoreNote);
    saveToLocalStorage();
    rendNotes();
    rendTrashNotes();
}


function deletTrash() {
    trashNotes = [];
    saveToLocalStorage();
    rendTrashNotes();
}


/* this function is to save the notes and the trashnotes in localstorage */
function saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes)); /* save every item in the note-array as a string */
    localStorage.setItem('trash', JSON.stringify(trashNotes));/* save every item in the trash-array as a string */
}


/* This function is to load any saved items in notes or in trash and show them always if the site is reloaded or closed and opened again, by calling it in body-onload */
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










