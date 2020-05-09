$("#signInButton").click(function() {
    $("#loginModal").modal();
});

$("#registerButton").click(function() {
    $("#registerModal").modal();
});

function addTodo() {
    let textbox = document.getElementById("todo-textbox");
    if(textbox.value == "")
      return;
    
    let li = document.createElement("li");
    let todoText = document.createTextNode(textbox.value);
    li.appendChild(todoText);
    
    let deleteButton = document.createElement("button");
    let deleteText = document.createTextNode("x"); 
    deleteButton.appendChild(deleteText);
    deleteButton.onclick = deleteTodo;
    li.appendChild(deleteButton);
    $(deleteButton).addClass("btn btn-warning btn-sm ml-1");

    
    let ul = document.getElementById("todo-list");
    ul.appendChild(li);
    
    textbox.value = "";
};
  
function deleteTodo() {
    let li = this.parentElement;
    li.parentElement.removeChild(li);
};

let textbox = document.getElementById("todo-textbox");
textbox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("todo-add").click();
  }
});
