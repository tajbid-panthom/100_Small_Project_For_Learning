const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((itemHeader) => {
    itemHeader.addEventListener("click", function () {
        const activeAccordion = document.querySelector(".accordion-item-header.active");

        if (activeAccordion && activeAccordion !== itemHeader) {
            activeAccordion.classList.toggle("active");
            activeAccordion.nextElementSibling.style.maxHeight = 0;
        }

        itemHeader.classList.toggle("active");
        const accordionItemBody = itemHeader.nextElementSibling;

        if (itemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});
