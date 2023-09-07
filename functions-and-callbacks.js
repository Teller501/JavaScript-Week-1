
// function declaration
function add(n1, n2) {

    return n1 + n2;
}

// function expression
const sub = (n1,n2) => {
    return n1 - n2;
}

// callback example
const cb = (n1,n2, callback) => {
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log( add(1,2) );
console.log( add );
console.log( add(1,2,3,5,4) );
console.log( add(1) );
console.log( cb(3,3,add) );
console.log( cb(4,3,sub) );
//console.log(cb(3,3,add()));
console.log(cb(3,"hh",add));

const mul = (n1,n2) => {
    return n1*n2;
}

console.log( cb(4,3,mul) );
console.log(cb(4,2,(n1,n2) => {
    return n1 / n2;
}))

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Anders", "Omar", "Ib"];
const filteredNames = names.filter((x) => {
    return x.length <=3;
})

console.log("---------------------")
names.forEach((x) => {
    console.log(x)
})
console.log("---------------------")
filteredNames.forEach((x) => {
    console.log(x)
})
console.log("---------------------")

const namesUpper = names.map((x) => {
    return x.toUpperCase();
})

namesUpper.forEach((x) => {
    console.log(x);
});


const arrayToList = (array) => {
    let formattedArray = array.map((x) => {
        return "<li>"+x+"</li>"
    })
    return `<ul>${formattedArray.join('')}</ul>`
}

console.log(arrayToList(names))


const cars = [

    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },

    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },

    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },

    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },

    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }

];

let carsFiltered = cars.filter((x) => {
    return x.year > 1999 && x.make==="Volvo" && x.price < 50000;
})

carsFiltered.forEach((x) => console.log(x))