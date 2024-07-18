const gray=document.querySelector(".gray")
const red=document.querySelector(".red")
gray.addEventListener("click",()=>{
    red.classList.add("animation")
    gray.classList.add("fill-color")
})
red.addEventListener("click",()=>{
    red.classList.remove("animation")
    gray.classList.remove("fill-color")
})