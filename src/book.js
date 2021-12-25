class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.read} pages, ${
      this.read ? "already read" : "not read yet"
    }`;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

export default Book;
