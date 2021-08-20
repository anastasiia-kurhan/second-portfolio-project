function save(item){
    var notesArray = getStoreArray ("notes");
    notesArray.push(item);
    localStorage.setItem("notes", JSON.stringify(notesArray));
}

function loadNotes(){
    var notesArray = getSavedNotes();
    var ul = document.getElementById("notes");
    if (notesArray != null){
        for (var i = 0; i < notesArray.length; i++){
            var li = document.createElement("li");
            li.innerHTML = notesArray[i];
            ul.appendChild(li);
        }
    }
}

function getSavedNotes(){
    return getStoreArray ("notes");
}

function getStoreArray(key){
    var notesArray = localStorage.getItem(key);
    if (notesArray == null || notesArray == ""){
        notesArray = new Array();
    }
    else {
        notesArray = JSON.parse(notesArray);
    }
    return notesArray;
}