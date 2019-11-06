// Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.

const createCarPropertiesHtml = (car) => {
    let carPropertiesHtml = ""

    for (const entry of Object.entries(car)) {
        carPropertiesHtml +=`<div>${entry[0]}: ${entry[1]}</div>`
    }

    return carPropertiesHtml
}

const createSalespersonHtml = (personName, car, profit) => {
    return `
        <section>
            <h2>${personName}</h2>
            <p>${createCarPropertiesHtml(car)}</p>
            <h3>Profit: $${profit}</h3>
            <hr>
        </section>
    `
}

export default createSalespersonHtml