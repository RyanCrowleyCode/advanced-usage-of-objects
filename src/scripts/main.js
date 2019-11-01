// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName: 
// streetAddress: 
// doctorName: 
// patientName: 
// visitDate: 
// amountBilled: 
// dueDate:

// You provide example values for each one.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bill = {
    officeName: "Doctors R Us",
    streetAddress: "123 Sesame Street",
    doctorName: "Nick",
    patientName: "Tickle Me Elmo",
    visitDate: "2019-11-01",
    amountBilled: 247,
    dueDate: "2019-12-01"
}

// Lightning Exercise 2: Copy the code below and paste it above your object.
// Use square bracket notation to output the value of those three properties to the console in Chrome.

console.log("Date Visited: ", bill[dateVisited])
console.log("Amount owed: ", bill[owed])
console.log("Patient: ", bill[patient])