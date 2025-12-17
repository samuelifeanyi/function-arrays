function greetCustomers(customername, bankname) {
    console.log(`Merry Christmas From All Of Us At ${bankname}, ${customername}`);
}

greetCustomers("Mr Samuel", 'First Bank')
greetCustomers("Mrs Samuel", 'GT Bank')
greetCustomers("Miss Ruth", 'Fidelity Bank')
greetCustomers("Miss Helen", 'First Bank')


function sum(num1, num2) {
    return (num1 / num2)
}

console.log(sum(25,5))


//Convert USD to AUD
function convertUsdToAud(usd) {
    return (usd * 1.5)
}

console.log(convertUsdToAud(2000))
  

// function expression
let showText = function() {
    console.log("hello Customer!")
    return "hello Customer!"
}
console.log(showText())

//showText() is different from showText

let newText = showText; // its storing the function called showText in a variable called newText
console.log(newText);

let oldText = showText(); // it execute the function called showText() and assaign the return value to a variable called oldText
console.log(newText());
console.log(oldText);




