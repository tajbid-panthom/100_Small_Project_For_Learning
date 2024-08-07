const signUp = document.querySelector(".contain-btn");
let modalContainer = document.querySelector(".modal-container")
signUp.addEventListener("click", () => {
    modalContainer.classList.add("show-modal")
})
const cross = document.querySelector(".close-btn")
cross.addEventListener("click", () => {
    modalContainer.classList.remove("show-modal")
})

window.addEventListener("click", e => {
    e.target === modalContainer ? modalContainer.classList.remove("show-modal") : false;
})