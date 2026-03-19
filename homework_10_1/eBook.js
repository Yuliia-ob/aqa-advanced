import Book from "./Book.js";

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (!value || typeof value !== "string") {
      console.log("Invalid file format");
      return;
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `${this.title} - ${this.author} (${this.year}) [${this.fileFormat}]`
    );
  }

  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}