let notes = [];
let trashNotes = [];

function rendNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
}


function rendTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = '';

    for (let indexNote = 0; indexNote < trashNotes.length; indexNote++) {
        trashContentRef.innerHTML += getTrashTemplate(indexNote);
    }
}


function getNotesTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})">x</button></p>`;
}


function getTrashTemplate(indexNote) {
    return `<p> ${trashNotes[indexNote]} <button onclick="restoreNote(${indexNote})"><img src="./assets/icon/icons8-reload-30.png" alt=""></button></p>`;
}


function addNote() {
    let inputRef = document.getElementById('inputRef');
    let inputRefValue = inputRef.value;
    if (inputRefValue.length >0){
    notes.push(inputRefValue);
    rendNotes();
    inputRef.value = '';
    }
}


function moveToTrash(indexNote) {
    trashNotes.push(notes[indexNote]);
    notes.splice(indexNote, 1);
    rendNotes();
    rendTrashNotes();
}

function restoreNote(TrashNoteIndex) {
    let ToRestoreNote = trashNotes.splice(TrashNoteIndex, 1);
    notes.push(ToRestoreNote);
    rendNotes();
    rendTrashNotes();
}


function deletTrash() {
    trashNotes = [];
    rendTrashNotes();
}

