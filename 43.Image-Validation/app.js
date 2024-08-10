const input = document.getElementById("inputBox")
input.addEventListener("keydown", () => {
    let form = document.querySelector(".mainForm")
    let pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (input.value.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
    }
    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
    }
})