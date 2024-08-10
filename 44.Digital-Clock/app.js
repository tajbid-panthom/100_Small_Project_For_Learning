const clock = document.querySelector(".clock")

clock.addEventListener("load", tick)
function tick() {
    const now = new Date();
    const second = now.getSeconds()
    const min = now.getMinutes()
    const hour = now.getHours()
    const aorp = hour > 12 ? "PM" : "AM";

    const html = `
        <span>${hour % 12} : </span>
        <span>${min} : </span>
        <span>${second} </span>
        <span>${aorp}</span>
    `
    clock.innerHTML = html;
}

setInterval(tick, 1000)