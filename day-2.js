const elements = document.querySelectorAll("div");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.background =  '#' + Math.random().toString(16).substr(-6);
}

document.getElementById("btn-1").addEventListener("click", function () {
    document.getElementById("div-1").style.background =  '#' + Math.random().toString(16).substr(-6);
    document.getElementById("div-2").style.background =  '#' + Math.random().toString(16).substr(-6);
    document.getElementById("div-3").style.background =  '#' + Math.random().toString(16).substr(-6);
});