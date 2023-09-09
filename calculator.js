const buttonDivs = document.querySelectorAll(".t1")

for (let i = 0; i < buttonDivs.length; i++) {
    buttonDivs[i].addEventListener("click", (ev) => {
        ev.preventDefault();
        const target = ev.target.innerHTML;
        console.log(target)
        document.getElementById("display").innerHTML += target;
    })
}

// Calculate button event
document.getElementById("calculate").addEventListener("click", (ev) => {
    ev.stopPropagation();

    const displayText = document.getElementById("display").innerHTML;

    const operatorIndex = displayText.indexOf('*') !== -1 ? '*' :
        displayText.indexOf('/') !== -1 ? '/' :
            displayText.indexOf('+') !== -1 ? '+' :
                displayText.indexOf('-') !== -1 ? '-' : null;

    if (!operatorIndex) return;

    let [num1, num2] = displayText.split(operatorIndex);

    num1 = Number(num1);
    num2 = parseFloat(num2);

    if (isNaN(num2)) return;

    let result;
    switch (operatorIndex) {
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
    }

    console.log(result);
    document.getElementById("display").innerHTML = result;
});

