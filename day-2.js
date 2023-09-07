const elements = document.querySelectorAll("div");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.background = "blue";
}

document.getElementById("btn-1").addEventListener("click", function () {
    document.getElementById("div-1").style.background = "red";
    document.getElementById("div-2").style.background = "green";
    document.getElementById("div-3").style.background = "yellow";
});