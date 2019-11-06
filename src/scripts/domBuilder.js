import createSalespersonHtml from "./salespersonHtmlBuilder.js"

// iterating through each sale in the salesByWeek report
salesByWeek.forEach(sale => {
    const salesperson = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name} `
    const car = sale.vehicle
    const profit = sale.gross_profit
    
    containerEl.innerHTML += createSalespersonHtml(salesperson, car, profit)
    

})