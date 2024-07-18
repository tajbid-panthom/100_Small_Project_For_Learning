const btn=document.getElementById("btn")
let hexCode=document.getElementById("hexcode")
function randomColor(){
    let letters="0123456789abcdef"
    let color="#"
    for (let i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=randomColor()
    hexCode.innerHTML=randomColor()
})