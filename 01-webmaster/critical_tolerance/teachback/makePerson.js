function makePerson(spec) {
    let {firstName, lastName} = spec;

    function getDisplayName() {
        return firstName + " " + lastName;
     }

    return Object.freeze({
        getDisplayName
     });
}


function makeEmployee(spec) {
    let {employeeId, hourlyRate} = spec;
    let {getDisplayName} = makePerson(spec);

    function calculatePay(hoursWorked) {
            return hourlyRate * hoursWorked;
    }

    return Object.freeze({
        getDisplayName,
        calculatePay
    });
}

const ardeshir = makeEmployee({
    firstName: "Ardeshir",
    lastName: "Sepahsalar",
    hourlyRate: 120,
    employeeId: 1
});

console.log(ardeshir.getDisplayName());
console.log(ardeshir.calculatePay(40));
