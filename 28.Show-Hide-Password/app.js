const input = document.querySelector("input")
const eyeicon = document.querySelector("#eye-icon")

eyeicon.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
})