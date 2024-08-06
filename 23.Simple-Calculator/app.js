document.querySelector("#btn").addEventListener("click", () => {
    let num1 = document.querySelector(".num1").value
    let num2 = document.querySelector(".num2").value
    let result = document.querySelector(".results")
    let operator = document.querySelector("#selectOp").value

    switch (operator) {
        case "plus":
            result.innerHTML = Number(num1) + Number(num2)
            break;
        case "minus":
            result.innerHTML = Number(num1) - Number(num2)
            break;
        case "multi":
            result.innerHTML = Number(num1) * Number(num2)
            break;
        case "div":
            result.innerHTML = Number(num1) / Number(num2)
            break;

        default:
            break;
    }
})