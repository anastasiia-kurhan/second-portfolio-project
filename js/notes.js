window.onload = init;
function init (){
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadNotes();
}
function handleButtonClick() {

    var textInput = document.getElementById("noteTextInput");
    var noteName = textInput.value;

    if (noteName == "") {
        alert("Please enter a note");
    } else {
        var li = document.createElement("li");
        li.innerHTML = noteName;
        var ul = document.getElementById("notes");
        ul.appendChild(li);
        save(noteName);

    }

}

