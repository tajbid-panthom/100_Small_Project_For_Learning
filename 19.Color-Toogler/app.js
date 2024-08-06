let toggler = document.querySelector("#switch")

toggler.addEventListener("click", () => {
    if (toggler.checked === true) {
        document.body.style.background = "#000"
    }
    else document.body.style.background = "#fff"
})