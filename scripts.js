let favMovie = (name = 'Pawel', movie = 'Killer') => { console.log(`My name is ${name} and my favorite movie is ${movie}`); }

favMovie()

let getFirstName = (name) => {
    let firstName = name.split(' ')
    return console.log(firstName[0]);
}
getFirstName('John Smith')


let getFirstNameConcise = name => (firstName = name.split(' '), console.log(firstName[0]))
getFirstNameConcise('Walt Disney')


function numbers(x, y) {
    let product = x * x;
    let exponent = y ^ x;
    console.log(`${product}`)
    console.log(`${exponent}`)
    return { product, exponent }
}
let stats = numbers(5, 10)
console.log(stats)

let arr = ['Paul', 'Birmingham', 'Kimchi'];

function newFunc(name, location, favFood) {
    console.log(`Name: ${name}`)
    console.log(`Location: ${location}`)
    console.log(`Favorite Food: ${favFood}`)
}

newFunc(...arr)

let myName = 'Pawel Jaskolski'

function greet(name) {
    let array = [...name]
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}


greet(myName);