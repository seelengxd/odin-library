let myLibrary = []

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${this.title} by ${this.author}, ${this.read} pages, ${this.read ? 'already read' : 'not read yet'}`;
}

Book.prototype.toggleReadStatus = function() {this.read = !this.read}

function addBookToLibrary(title, author, pages, read){
  newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook);
  return newBook
}

function makeBookCard(book){
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
    myLibrary = myLibrary.filter((b) =>  b != book)
    container.removeChild(card);

  })
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages)
  card.appendChild(readButton);
  card.appendChild(removeButton);
  return card
}

function display(book){
  let container = document.querySelector(".container");
  container.appendChild(makeBookCard(book));
}
function displayAllBooks(){
  for (const book of myLibrary){
    display(book)
  }
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
displayAllBooks();

document.querySelector("#new").addEventListener('click', () => {
  document.querySelector('form').classList.toggle('hidden')
})

function handleForm(e){
  e.preventDefault();
  let title = document.querySelector("input[name='title']").value
  let author = document.querySelector("input[name='author']").value
  let pages = document.querySelector("input[name='pages']").value
  let read = document.querySelector("select[name='read']").value
  let book = addBookToLibrary(title, author, pages, read == 'yes');
  display(book);
}

document.querySelector('form').onsubmit = handleForm
