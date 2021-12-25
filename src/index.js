import Book from "./book";

class Library {
  constructor() {
    this.myLibrary = [];
  }

  addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.myLibrary.push(newBook);
    return newBook;
  }

  makeBookCard(book) {
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h2");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = book.author;
    const pages = document.createElement("p");
    pages.textContent = `${book.pages} Pages`;
    const readButton = document.createElement("button");
    readButton.textContent = book.read ? "Already read" : "Not read yet";
    readButton.addEventListener("click", () => {
      book.toggleReadStatus();
      readButton.textContent = book.read ? "Already read" : "Not read yet";
    });
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      this.myLibrary = this.myLibrary.filter((b) => b !== book);
      container.removeChild(card);
    });
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readButton);
    card.appendChild(removeButton);
    return card;
  }

  display(book) {
    const container = document.querySelector(".container");
    container.appendChild(this.makeBookCard(book));
  }

  displayAllBooks() {
    this.myLibrary.forEach((book) => this.display(book));
  }
}

const library = new Library();

library.addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
library.displayAllBooks();

document.querySelector("#new").addEventListener("click", () => {
  document.querySelector("form").classList.toggle("hidden");
});

function handleForm(e) {
  e.preventDefault();
  const title = document.querySelector("input[name='title']").value;
  const author = document.querySelector("input[name='author']").value;
  const pages = document.querySelector("input[name='pages']").value;
  const read = document.querySelector("select[name='read']").value;
  const book = library.addBookToLibrary(title, author, pages, read === "yes");
  library.display(book);
}

document.querySelector("form").onsubmit = handleForm;
