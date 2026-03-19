import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new Book("The Hobbit", "Tolkien", 1937);

const ebook = new EBook("Clean Code", "Robert Martin", 2008, "PDF");

book1.printInfo();
book2.printInfo();
ebook.printInfo();

const books = [book1, book2, ebook];

const oldest = Book.getOldestBook(books);
console.log("Oldest:");
oldest.printInfo();

const newEbook = EBook.fromBook(book1, "PDF");
newEbook.printInfo();