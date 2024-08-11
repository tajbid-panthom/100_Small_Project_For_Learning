const upload = document.querySelector("input")
const image = document.querySelector(".img img")
const closes = document.querySelector(".icon .close")


upload.addEventListener("change", () => {
    uploadFile(event)
})

function uploadFile(event) {
    image.classList.add("active")
    closes.classList.add("exit")
    image.src = URL.createObjectURL(event.target.files[0])

    closes.addEventListener("click", () => {
        image.classList.toggle("active")
        closes.classList.toggle("exit")
    })
}