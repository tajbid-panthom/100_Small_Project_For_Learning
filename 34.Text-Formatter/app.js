const inputText = document.getElementById("input-field")
const outputText = document.querySelector(".output-field")
const btns = document.querySelectorAll(".btn")
inputText.addEventListener("keyup", () => {
    outputText.innerHTML = inputText.value
})

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (outputText.classList.length === 1) {
            outputText.classList.add(btn.classList[0])

        }
        else if (outputText.classList.length === 2) {
            outputText.classList.toggle(outputText.classList[outputText.classList.length - 1])
        }
        else outputText.classList.toggle(outputText.classList[outputText.classList.length - 2])
    })
})
