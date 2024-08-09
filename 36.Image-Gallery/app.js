const images = document.querySelectorAll("img")
const wrapper = document.getElementById("wrapper")
const fullImage = document.getElementById("fullImage")
const close = document.querySelector("span")

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/img${index}.jpg`)
    })
})

close.addEventListener("click", () => {
    wrapper.style.display = "none"
})

function openModal(pic) {
    wrapper.style.display = "flex"
    fullImage.src = pic
}