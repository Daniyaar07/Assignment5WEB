let tasks = [];
function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task == ""){
        return;
    }
    tasks.push(task);
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick= function(){
        if(checkbox.checked){
            li.style.textDecoration="line-through";
        }
        else{
            li.style.textDecoration= "none";
        }
    };
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.onclick = function(){
        let index = tasks.indexOf(task);
        tasks.splice(index , 1);
        li.remove();
    };
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));
    li.appendChild(button);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
