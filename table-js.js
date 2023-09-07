const cars = [

    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },

    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },

    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },

    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },

    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }

];

function makeTable(array){
    const tab = array.map((car) => {
        return `<tr><th>${car.id}</th><th>${car.year}</th><th>${car.make}</th><th>${car.model}</th><th>${car.price}</th></tr>`
    }).join("")
    document.getElementById("tbody").innerHTML = tab;
}

document.addEventListener("DOMContentLoaded", makeTable(cars))
document.getElementById("button-less-than").addEventListener("click", (ev) => {
    ev.preventDefault();
    const price = document.getElementById("price-input").value;
    console.log(price);
    const filteredCars = cars.filter((car) => {return car.price < price});
    makeTable(filteredCars);
});

document.getElementById("clear-button").addEventListener("click", (ev) => {
    ev.preventDefault();
    document.getElementById("price-input").value='';
    makeTable(cars);
})

document.getElementById("button-make").addEventListener("click", (ev) => {
    ev.preventDefault();
    const make = document.getElementById("make-input").value;
    console.log(make);
    const filteredCars = cars.filter((car) => {return car.make.includes(make)});
    makeTable(filteredCars);
});

// Price Sort
let ascendingOrder = true;

document.querySelector(".table th:nth-child(5)").addEventListener("click", (ev) => {
    ev.preventDefault();
    const sortedCars = ascendingOrder
        ? cars.sort((a, b) => a.price - b.price)
        : cars.sort((a, b) => b.price - a.price);

    ascendingOrder = !ascendingOrder; // Toggle sorting order

    makeTable(sortedCars);
});


document.querySelector(".table th:nth-child(2)").addEventListener("click", (ev) => {
    ev.preventDefault();
    const sortedCars = ascendingOrder
        ? cars.sort((a, b) => a.year - b.year)
        : cars.sort((a, b) => b.year - a.year);

    ascendingOrder = !ascendingOrder; // Toggle sorting order

    makeTable(sortedCars);
});

