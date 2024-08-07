const progress = document.querySelector("#prog")
const previous = document.querySelector("#previous")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let activeIndex = 1

next.addEventListener("click", () => {
    activeIndex++
    if (activeIndex > circles.length) {
        activeIndex = circles.length
    }
    updateUI()
})
previous.addEventListener("click", () => {
    activeIndex--
    if (activeIndex < 1) {
        activeIndex = 1
    }
    updateUI()
})
const updateUI = () => {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"

    if (activeIndex === 1) {
        previous.disabled = true
    } else if (activeIndex === circles.length) {
        next.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
}
