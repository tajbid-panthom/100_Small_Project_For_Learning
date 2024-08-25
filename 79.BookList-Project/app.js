const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (title.value == "" && author.value == "" && year.value == "") {
        alert("Fill The Form");
    } else {
        const newRow = document.createElement("section");
        // Creating new Title
        const newTitle = document.createElement("div");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        title.value = null


        // Creating new Author
        const newAuthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newRow.append(newAuthor);
        author.value = null

        // Creating new Year
        const newYear = document.createElement("div");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = null

        bookList.appendChild(newRow);
    }
});