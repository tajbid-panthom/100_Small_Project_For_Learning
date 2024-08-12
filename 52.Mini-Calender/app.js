const monthName = document.getElementById("month")
const dayName = document.getElementById("day")
const dayNumber = document.getElementById("day-number")
const year = document.getElementById("year")

const date = new Date()

const month = date.getMonth()
monthName.innerHTML = date.toLocaleDateString("en", {
    month: "long"
})

dayName.innerHTML = date.toLocaleDateString("en", {
    weekday: "long"
})

dayNumber.innerHTML = date.getDate()
year.innerHTML = date.getFullYear()