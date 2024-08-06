const btn = document.querySelector(".emoji")

const emoji = [
    "😌",
    "😒",
    "😈",
    "🙄",
    "🤢",
    "😂",
    "🥶",
    "😊",
    "😢",
    "😉",
    "😴",
    "😘"
]
btn.addEventListener("mouseover", () => {
    btn.innerHTML = emoji[Math.round(Math.random() * emoji.length - 1)]
})