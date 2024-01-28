import { exampleBooks } from './bookExamples.js'
import Book from './Book.js'

const books = [];

function deleteBook(event) {
    const bookId = event.target.id.split('-')[1];
    const book = document.getElementById(`book-${bookId}`);
    book.remove();

    // Remove the book from the books array
    const bookIndex = books.findIndex(book => book.id === bookId);
    books.splice(bookIndex, 1);
}

function toggleBookRead(event) {
    const bookId = event.target.id.split('-')[1];
    const book = books.find(book => book.getId() === bookId);

    if(!book) return;

    book.toggleRead();
    console.log(books)
}

function main() {

    const booksContainer = document.querySelector('.books-container');

    // Create a new Book object for each book in exampleBooks
    // and add it to the books array

    exampleBooks.forEach((book) => {
        const newBook = new Book(book.title, book.author, book.id, book.isRead);
        books.push(newBook);

        const bookHTML = newBook.generateBookHTML();

        // Add event listener to the delete button
        const deleteButton = bookHTML.querySelector('.btn--delete');
        deleteButton.addEventListener('click', deleteBook);

        // Add event listener to the read checkbox
        const readCheckbox = bookHTML.querySelector('.book__read input[name="read"]');
        readCheckbox.addEventListener('change', toggleBookRead);

        booksContainer.appendChild(bookHTML);
    });
}

window.onload = main