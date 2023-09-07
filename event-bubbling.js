/*
document.getElementById("div-1").onclick = () => {
    console.log(`hi from ${event.target.id}`);
}

document.getElementById("div-2").onclick = () => {
    console.log(`hi from ${event.target.id}`);
}*/

document.getElementById("outer").onclick = (ev) => {
    const target= ev.target.id;
    document.getElementById("empty-paragraph").innerHTML = target
}
