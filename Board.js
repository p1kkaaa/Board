document.addEventListener("DOMContentLoaded", () => {
    const notesWrapper = document.querySelector(".notes-wrapper"); 
    const textarea = document.querySelector("#noteInput"); 
    const addButton = document.querySelector("#addNoteBtn"); 

    loadNotes();

    addButton.addEventListener("click", () => {
        const text = textarea.value.trim();
        if (text !== "") {
            addNote(text, new Date().toLocaleString());
            textarea.value = "";
            textarea.style.height = "40px";
            saveNotes();
        }
    });

    textarea.addEventListener("input", () => {
        textarea.style.height = "40px";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; 
    });

    function addNote(text, timestampText) {
        const note = document.createElement("div");
        note.classList.add("note");

        const noteText = document.createElement("div");
        noteText.classList.add("note-text");
        noteText.textContent = text;

        const confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.innerHTML = "&#9989;";
        confirmBtn.style.display = "none";

        noteText.addEventListener("click", () => {
            noteText.setAttribute("contenteditable", "true");
            noteText.focus();
            confirmBtn.style.display = "inline";
        });

        noteText.addEventListener("blur", () => {
            noteText.setAttribute("contenteditable", "false");
            confirmBtn.style.display = "none";
            saveNotes();
        });

        confirmBtn.addEventListener("click", () => {
            noteText.setAttribute("contenteditable", "false");
            confirmBtn.style.display = "none";
            saveNotes();
        });

        note.appendChild(noteText);

        const timestamp = document.createElement("div");
        timestamp.classList.add("timestamp");
        timestamp.textContent = timestampText;
        note.appendChild(timestamp);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "&#10060;";
        deleteBtn.addEventListener("click", () => {
            note.remove();
            saveNotes();
        });

        const controls = document.createElement("div");
        controls.classList.add("note-controls");
        controls.appendChild(confirmBtn);
        controls.appendChild(deleteBtn);
        note.appendChild(controls);

        notesWrapper.appendChild(note);
        notesWrapper.scrollTop = notesWrapper.scrollHeight;
    }

    function saveNotes() {
        const notes = [];
        document.querySelectorAll(".note").forEach(note => {
            const text = note.querySelector(".note-text").textContent;
            const timestamp = note.querySelector(".timestamp").textContent;
            notes.push({ text, timestamp });
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        savedNotes.forEach(note => addNote(note.text, note.timestamp));
    }
});
