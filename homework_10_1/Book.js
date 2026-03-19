export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (!value || typeof value !== "string") {
      console.log("Invalid title");
      return;
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (!value || typeof value !== "string") {
      console.log("Invalid author");
      return;
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value < 0) {
      console.log("Invalid year");
      return;
    }
    this._year = value;
  }

  printInfo() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
  }

  static getOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}