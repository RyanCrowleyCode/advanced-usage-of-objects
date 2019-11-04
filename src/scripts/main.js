// Lightning Exercise 1: Create an object that represents a bill from your doctor's office.

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

// Lightning Exercise 2: 
// Use square bracket notation to output the value of those three properties to the console in Chrome.

// console.log("Date Visited: ", bill[dateVisited])
// console.log("Amount owed: ", bill[owed])
// console.log("Patient: ", bill[patient])


// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

// for (const value of Object.values(bill)) {
//     console.log(value)
// }

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

// for (const key of Object.keys(bill)) {
//     console.log(key)
// }

// // Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

const containerEl = document.querySelector("#container")

// for (const key of Object.keys(bill)) {
//     containerEl.innerHTML += `
//     <span>${key}</span>
//     `
// }

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favFood = {
    name: "Pizza",
    topping1: "Pepperoni",
    topping2: "Mushrooms",
    size: "Large",
}


// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
for (const entry of Object.entries(favFood)) {
    containerEl.innerHTML += `<p>${entry[0]}: ${entry[1]}</p>`
}