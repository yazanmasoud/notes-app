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
        trashContentRef.innerHTML += getNotesTemplate(indexNote);
    }
}
    


function getNotesTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})">x</button></p>`;
}

function addNote() {
    let inputRef = document.getElementById('inputRef');
    let inputRefValue = inputRef.value;

    notes.push(inputRefValue);
    rendNotes();
    inputRef.value = '';
}

function moveToTrash(indexNote) {
    
    trashNotes.push(notes[indexNotes]);
    notes.splice(indexNote, 1); 
    rendNotes();
    rendTrashNotes();
}

