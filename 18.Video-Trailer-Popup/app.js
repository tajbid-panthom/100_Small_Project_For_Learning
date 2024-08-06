let imgClick = document.querySelector(".btn")
let closeIcon = document.querySelector(".close-icon")
const video = document.querySelector("video")
let bgVideo = document.querySelector(".trailer-container")

imgClick.addEventListener("click", () => {
    bgVideo.classList.remove("active")
})
closeIcon.addEventListener("click", () => {
    bgVideo.classList.add("active")
    video.pause()
    video.currentTime = 0
})