import buildDom from "./domBuilder.js"
import salesByWeek from "./data.js"

const searchInput = document.querySelector("#searchInput")


const Listeners = {

    listenToSearch: function () {
        searchInput.addEventListener('keypress', event => {
            if (searchInput.value) {
                if (event.charCode === 13) {
                    const searchTerm = event.target.value
                    
                    const salesPersonArray = []
                    salesByWeek.forEach(sale => {
                        const salesPerson = sale.sales_agent
                        for (const value of Object.values(salesPerson)) {
                            if (value.toLowerCase() === searchTerm.toLowerCase()) {
                                salesPersonArray.push(sale)
                            }
                        }
                    })
                    buildDom.buildFromData(salesPersonArray)
                }
            } else {
                buildDom.buildFromData(salesByWeek)
            }
        })
    }
}

export default Listeners