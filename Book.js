function Book(id, title, author, pages, isRead=false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.toggleRead = function() {
        this.isRead = !this.isRead;
    };

    this.getTitle = function() {
        return this.title;
    };

    this.getAuthor = function() {
        return this.author;
    };

    this.getPages = function() {
        return this.pages;
    };

    this.getId = function() {
        return this.id;
    };

    this.getIsRead = function() {
        return this.isRead;
    };

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
            <div class="book__pages">${this.pages} pages</div>
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