function printP(p) {
    console.log(`${p.firstName} ${p.lastName} - ${p.age}`);
}

function greet(p) {
    console.log(`Hello, I am ${p.firstName}`);
}

function checkID(p) {
    
    if (p.age >= 18) {
        console.log(`${p.firstName} is old enough, let's drink!`);
    } else {
        console.log(`${p.firstName} is NOT an adult`);
    }
}


export { printP,greet,checkID }