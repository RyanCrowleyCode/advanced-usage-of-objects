// Practice: Car Sales
// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. 

// Here's your first data structure for the sales made last week. You will need to start off by iterating the array of sales with a forEach() method. Then iterate the entries of the vehicle property of each sale.

import salesByWeek from "./data.js"
import createSalespersonHtml from "./salespersonHtmlBuilder.js"

// targeting the container div
let containerEl = document.querySelector("#container")


// iterating through each sale in the salesByWeek report
salesByWeek.forEach(sale => {
    const salesperson = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name} `
    const car = sale.vehicle
    const profit = sale.gross_profit
    
    containerEl.innerHTML += createSalespersonHtml(salesperson, car, profit)
    

})

