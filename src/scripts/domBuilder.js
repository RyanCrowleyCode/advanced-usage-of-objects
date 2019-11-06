import createSalespersonHtml from "./salespersonHtmlBuilder.js"
import salesByWeek from "./data.js"

// iterating through each sale in the salesByWeek report
const buildDom = {
    buildFromData: function (data) {

        // targeting the container div
        let containerEl = document.querySelector("#container")

        // clearing out the container div
        containerEl.innerHTML = ""

        data.forEach(sale => {
            const salesperson = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name} `
            const car = sale.vehicle
            const profit = sale.gross_profit
            
            containerEl.innerHTML += createSalespersonHtml(salesperson, car, profit)
 
        })
    }
}

export default buildDom