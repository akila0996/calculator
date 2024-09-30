var input1Element = document.getElementById("input1")
var input2Element = document.getElementById("input2")
var result = document.getElementById("result")

function add(){
    result.innerHTML = parseFloat(input1Element.value) + parseFloat(input2Element.value);

    clear();
}

function sub(){
    result.innerHTML = parseFloat(input1Element.value) - parseFloat(input2Element.value);

    clear();
}

function multiply(){
    result.innerHTML = parseFloat(input1Element.value) * parseFloat(input2Element.value);

    clear();
}

function divide(){
    result.innerHTML = parseFloat(input1Element.value) / parseFloat(input2Element.value);

    clear();
}

function clear(){

    input1Element.value = "";
    input2Element.value = "";
}
