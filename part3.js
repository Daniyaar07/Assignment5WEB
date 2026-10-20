function changeColor(){
    document.getElementById("mouseBox").style.backgroundColor = "yellow";
}
function resetColor(){
    document.getElementById("mouseBox").style.backgroundColor = "green";
}
function showText(){
    let text = document.getElementById("inputText").value;
    document.getElementById("result").innerHTML = text;
}

function add(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("answer").innerHTML = a + b;
}
function subtract(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("answer").innerHTML = a - b;
}
function multiply(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("answer").innerHTML = a * b;
}
function divide(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if(b == 0){
        document.getElementById("answer").innerHTML = "Can't divide by zero"
    }
    else{
        document.getElementById("answer").innerHTML = a / b;
    }
}