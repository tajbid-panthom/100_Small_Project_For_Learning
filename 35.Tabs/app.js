function getTab(element) {
    const active = document.querySelector(".active")
    const visible = document.querySelector(".content-visible")
    const tabContent = document.getElementById(element.href.split("#")[1])

    active.classList.toggle("active")
    visible.classList.toggle("content-visible")
    element.classList.add("active")
    tabContent.classList.add("content-visible")
}

document.addEventListener("click", e => {
    if (e.target.matches(".tabs-item a")) {
        getTab(e.target)

    }
})