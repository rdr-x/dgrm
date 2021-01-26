var imag1 = document.getElementById("imag");
var imag2 = document.getElementById("imag2");

imag1.addEventListener("click", touchFunction);
imag2.addEventListener("click", touchFunction);

function touchFunction(x) {
    alert("don't touch me!");
    console.log(x);
};