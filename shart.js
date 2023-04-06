var x,y;
function setValues() {
    a = Number(document.getElementById("no1").value);
    b = Number(document.getElementById("no2").value);
}
function add(){
    setValues;
    sum = a+b;
    document.getElementById("demo1").innerHTML = sum;
}
function subtract(){
    setValues
    difference = a-b;
    document.getElementById("demo2").innerHTML = difference;
}
function multiply(){
    setValues
    product = a*b;
    document.getElementById("demo3").innerHTML = product;
}
function multiply(){
    setValues
    quotient = a/b
    document.getElementById("demo4").innerHTML = quotient;
}