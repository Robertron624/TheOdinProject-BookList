import { exampleBooks } from './bookExamples.js'
import Book from './Book.js'

const books = [];
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('button#new-book');
const newBookModal = document.querySelector('#new-book-modal');
const newBookForm = document.querySelector('.new-book-form');
const modalCloseButton = document.querySelector('#new-book-modal button.modal__close');

function getNewId () {
    const ids = books.map(book => parseInt(book.getId()));
    const maxId = Math.max(...ids);
    return maxId + 1;
}

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
}

function addBookToDom(newBook) {
    const bookHTML = newBook.generateBookHTML();

    // Add event listener to the delete button
    const deleteButton = bookHTML.querySelector('.btn--delete');
    deleteButton.addEventListener('click', deleteBook);

    // Add event listener to the read checkbox
    const readCheckbox = bookHTML.querySelector('.book__read input[name="read"]');
    readCheckbox.addEventListener('change', toggleBookRead);

    booksContainer.appendChild(bookHTML);
}

function handleNewBookFormSubmit(event) {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const pages = event.target.elements.pages.value;
    const isRead = event.target.elements.read.checked;

    const id = getNewId();

    const newBook = new Book(id, title, author, pages, isRead);
    books.push(newBook);

    addBookToDom(newBook);

    newBookModal.close();
    event.target.reset();
}

function main() {

    document.addEventListener('click', (event) => {
        if(event.target === newBookModal) {
            newBookModal.close();
        }
    });

    exampleBooks.forEach((book) => {
        const newBook = new Book(book.id, book.title, book.author, book.pages, book.isRead);
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

    newBookButton.addEventListener('click', () => {
        newBookModal.showModal();
    });

    modalCloseButton.addEventListener('click', () => {
        newBookModal.close();
    });

    newBookForm.addEventListener('submit', handleNewBookFormSubmit);
}

window.onload = main