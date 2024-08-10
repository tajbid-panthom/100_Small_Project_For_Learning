const generateQuoteBtn = document.getElementById("quoteBtn")

const quoteOutput = document.getElementById("quoteOutput")

const authorOutput = document.getElementById("authorOutput")

// console.log(generateQuoteBtn)
// console.log(quoteOutput)
// console.log(authorOutput)

const arrayOfQuotes = [
    {
        author: "Albert Einstein",
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them."
    },
    {
        author: "Albert Einstein 2",
        quote: "Cumque aliquid dicta perspiciatis facilis nisi veritatis."
    },
    {
        author: "Albert Einstein 3",
        quote: "Quos, explicabo eum. Facilis asperiores nulla iusto veniam! "
    },
    {
        author: "Albert Einstein 4",
        quote: "Soluta esse quaerat aspernatur vero illo tempore, cumque aliquid dicta perspiciatis facilis nisi veritatis. "
    },
    {
        author: "Albert Einstein 5",
        quote: "Soluta esse quaerat aspernatur vero illo tempore, cumque aliquid dicta perspiciatis facilis nisi veritatis. "
    },
    {
        author: "Albert Einstein 6",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
    },
    {
        author: "Albert Einstein 7",
        quote: "Ea dolore consectetur magni voluptatibus asperiores vitae quod quibusdam nostrum cumque. Quia, perspiciatis!"
    }
]

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1)
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>${arrayOfQuotes[random].author}</small>`
}


generateQuoteBtn.addEventListener("click", generateQuote)