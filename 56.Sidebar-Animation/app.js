const menuBtn = document.getElementById("menu")
const sideBar = document.getElementById("sidebar")
const content = document.getElementById("content")

menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active")
    content.classList.toggle("active")
})