var x=0; y=0; result=0; calc="calc"

function kasiliat() {
    document.getElementById("result_response").innerHTML = ``;
    document.getElementById("result_reinput1").style.display = "none";
    document.getElementById("result_reinput2").style.display = "none";
    document.getElementById("clear").style.display = "none";

    if (!isNaN(result)) {
        document.getElementById("result_response").innerHTML = `The result of ${x} ${calc} ${y} is ${result}`;
        document.getElementById("result_reinput1").style.display = "inline";
        document.getElementById("result_reinput2").style.display = "inline";
        document.getElementById("clear").style.display = "inline";
    } else {
        document.getElementById("result_response").innerHTML = "Please put only numbers in both column!";
        document.getElementById("clear").style.display = "inline";
    }
}

function klirr() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result_response").innerHTML = ``;
    document.getElementById("result_reinput1").style.display = "none";
    document.getElementById("result_reinput2").style.display = "none";
    document.getElementById("clear").style.display = "none";
}

function functambah() {
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    calc = "+";
    result = 0;
    result = Number(x) + Number(y);
    console.log(result);

    kasiliat();
}

function funckurang() {
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    calc = "-";
    result = 0;
    result = Number(x) - Number(y);

    kasiliat();
}

function funckali() {
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    calc = "*";
    result = 0;
    result = Number(x) * Number(y);

    kasiliat();
}

function funcbagi() {
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    calc = "/";
    result = 0;
    result = Number(x) / Number(y);

    kasiliat();
}

function resinput1() {
    document.getElementById('num1').value = result;
}

function resinput2() {
    document.getElementById('num2').value = result;
}