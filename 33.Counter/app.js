const incrementBtn = document.querySelector(".increment-btn")
const counterBox = document.getElementById("count")
const saveBtn = document.querySelector(".save-btn")
const save = document.getElementById("save")

let count = 0
incrementBtn.addEventListener("click", () => {
    count++
    counterBox.innerHTML = count
})
saveBtn.addEventListener("click", () => {
    save.innerHTML += (count + " ")
    count = 0
    counterBox.innerHTML = count
})


