function addNewTask(){
    var list = document.getElementById('list');
    var text = document.getElementById('taskname').value;

    if(text.length === 0){
        alert("Precisa escrever algo");
        return;
    }

    var listItem = document.createElement('li');
    listItem.className = "list-item"

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

}