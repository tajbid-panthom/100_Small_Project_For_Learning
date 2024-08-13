const imageContainer = document.querySelector(".image-container")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

let x = 0

prevBtn.addEventListener("click", () => {
    x += (-45)
    rotate(x)
})
nextBtn.addEventListener("click", () => {
    x += 45
    rotate(x)
})

function rotate(x) {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}