function changeText(){
    document.getElementById("text").innerHTML = "Hello JavaScript";
}
function changeColor(){
    document.getElementById("box").style.backgroundColor = "yellow";
}
function changeSize(){
    document.getElementById("box").style.fontSize = "30px";
}
function removeItem(){
    let list = document.getElementById("list");
    if(list.lastElementChild){
        list.lastElementChild.remove();
    }
}
function addItem(){
    let item = document.createElement("li");
    item.innerHTML = "New Item";
    document.getElementById("list").appendChild(item);
}