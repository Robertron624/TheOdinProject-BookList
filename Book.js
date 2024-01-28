function Book(title, author, id, isRead=false) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.isRead = isRead;

    // Toggle the isRead property of the book
    this.toggleRead = function() {
        this.isRead = !this.isRead;
    };

    // Return the book's title
    this.getTitle = function() {
        return this.title;
    };

    // Return the book's author
    this.getAuthor = function() {
        return this.author;
    };

    // Return the book's id
    this.getId = function() {
        return this.id;
    };

    // Return the book's isRead property
    this.getIsRead = function() {
        return this.isRead;
    };

    // Set the book's title

    this.setTitle = function(title) {
        this.title = title;
    };


    // Set the book's author
    this.setAuthor = function(author) {
        this.author = author;
    };

    // method to generate book html for the DOM

    this.generateBookHTML = function() {
        const bookHTML = document.createElement('div');
        bookHTML.classList.add('book');
        bookHTML.setAttribute('id', `book-${this.id}`);
        bookHTML.innerHTML = `
            <div class="book__title">${this.title}</div>
            <div class="book__author">${this.author}</div>
            <div class="book__read">
                <input type="checkbox" id="read-${this.id}" name="read" ${this.isRead ? 'checked' : ''}>
                <label for="read-${this.id}">Read</label>
            </div>
            <div class="book__delete">
                <button class="btn btn--delete" id="delete-${this.id}">Delete</button>
            </div>
        `;

        return bookHTML;
    };
};

export default Book;