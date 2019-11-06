import buildDom from "./domBuilder.js"
import Listeners from "./events.js"
import salesByWeek from "./data.js"


buildDom.buildFromData(salesByWeek)
Listeners.listenToSearch()





