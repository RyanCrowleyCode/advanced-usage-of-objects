import buildDom from "./domBuilder.js"
import salesByWeek from "./data.js"

const searchInput = document.querySelector("#searchInput")


const Listeners = {

    listenToSearch: function () {
        searchInput.addEventListener('keyup', () => {
            if (searchInput.value) {
                if (event.charCode === 13) {
                    const searchTerm = event.target.value
                    if (searchTerm) {
                        console.log(searchTerm)
                        // filter salesByWeek data
                        // run domBuilder on new filtered array
                        salesByWeek.forEach(sale => {
                            
                        })
                    }
                }
            } else {
                // when there is nothing typed in the search field, the DOM will populate with all of the data from data.js
                buildDom.buildFromData(salesByWeek)
            }
        })
    }
}

export default Listeners