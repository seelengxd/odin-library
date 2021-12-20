class Book {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info(){
    return `${this.title} by ${this.author}, ${this.read} pages, ${this.read ? 'already read' : 'not read yet'}`;
  }

  toggleReadStatus(){
   this.read = !this.read;
  }
}

class Library {
  constructor(){
    this.myLibrary = []
  }

  addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read)
    this.myLibrary.push(newBook);
    return newBook
  }

  makeBookCard(book){
    let container = document.querySelector(".container");
    let card = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('h2');
    title.textContent = book.title;
    let author = document.createElement('p');
    author.textContent = book.author;
    let pages = document.createElement('p')
    pages.textContent = book.pages + ' Pages';
    let readButton = document.createElement('button')
    readButton.textContent = book.read ? 'Already read' : 'Not read yet'
    readButton.addEventListener('click', () => {
      book.toggleReadStatus();
      readButton.textContent = book.read ? 'Already read' : 'Not read yet'
    })
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'
    removeButton.addEventListener('click', () => {
      this.myLibrary = this.myLibrary.filter((b) =>  b != book)
      container.removeChild(card);
  
    })
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages)
    card.appendChild(readButton);
    card.appendChild(removeButton);
    return card;
  }

  display(book){
    let container = document.querySelector(".container");
    container.appendChild(this.makeBookCard(book));
  }
  
  displayAllBooks(){
    for (const book of this.myLibrary){
      this.display(book)
    }
  }
}


let library = new Library();

library.addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
library.displayAllBooks();

document.querySelector("#new").addEventListener('click', () => {
  document.querySelector('form').classList.toggle('hidden')
})

function handleForm(e){
  e.preventDefault();
  let title = document.querySelector("input[name='title']").value
  let author = document.querySelector("input[name='author']").value
  let pages = document.querySelector("input[name='pages']").value
  let read = document.querySelector("select[name='read']").value
  let book = library.addBookToLibrary(title, author, pages, read == 'yes');
  library.display(book);
}

document.querySelector('form').onsubmit = handleForm
