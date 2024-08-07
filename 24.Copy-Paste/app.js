const copyText = document.querySelector("#copyText")
const moveText = document.querySelector("#moveText")
const moveBtn = document.querySelector(".move-btn")
const copyBtn = document.querySelector(".copy-btn")
const output = document.querySelector(".output")

copyBtn.addEventListener("click", () => {
    let temp = copyText.value
    copyToClipBoard(temp)
})
moveBtn.addEventListener("click", () => {
    let temp = copyText.value
    moveText.value = temp
})

copyText.addEventListener("click", () => this.select())
moveText.addEventListener("click", () => this.select())

function copyToClipBoard(str) {
    const outputContainer = document.querySelector(".output-container")
    const textArea = document.querySelector("textarea")
    textArea.value = str
    outputContainer.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    outputContainer.removeChild(textArea)
    output.innerHTML = `<h3>Content Copied</h3>`
    output.classList.add("added")
    setTimeout(() => {
        output.classList.toggle("added")
        output.textContent = ""
    }, 2000)
}