function addNote() {
  const note = document.getElementById("note");
  const list = document.getElementById("list");

  if (note.value.trim() !== "") {
    const item = document.createElement("li");
    item.textContent = note.value.trim();

    list.appendChild(item);
    note.value = "";
  } else {
    alert("Por favor, escriba una nota antes de agregar");
  }
}

function clearNotes() {
  const list = document.getElementById("list");
  list.innerHTML = "";
}
