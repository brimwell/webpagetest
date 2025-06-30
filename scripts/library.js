const myLibrary = [];

function Book(title, author, yearWritten, read) {
    this.title = title;
    this.author = author;
    this.yearWritten = yearWritten;
    this.read = read;
}

function addBook(title, author, yearWritten, read) {
    let newBook = new Book(title, author, yearWritten, read);
    newBook.userID = crypto.randomUUID();
    myLibrary.push(newBook);
}

//  Books to get started 

addBook('My Korean Deli', 'Ben Ryder Howe', 2010, true);
addBook('The Three-Body Problem', 'Cixin Liu', 2006, true);
addBook('The Dark Forest', 'Cixin Liu', 2008, false);
addBook('The Lost Continent', 'Bill Bryson', 1989, false);


// Display the contents of array
const libraryContainer = document.querySelector('.librarycontainer');

function displayLibrary() {
    libraryContainer.textContent = '';

    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        
        const card1 = document.createElement('div');
        card1.classList.add('card');
        card1.setAttribute('data-id', book.userID);

        const title = document.createElement('h2');
        title.textContent = book.title;
        card1.appendChild(title);

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = 'by ' + book.author;
        card1.appendChild(author);

        const year = document.createElement('p');
        year.classList.add('year');
        year.textContent = book.yearWritten;
        card1.appendChild(year);

        if (book.read === true) {
            card1.classList.add('read');
        } else {
            card1.classList.add('unread');
        }

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btncontainer');

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removebtn');
        removeBtn.textContent = 'Remove';
        btnContainer.appendChild(removeBtn);

        const readToggleBtn = document.createElement('button');
        readToggleBtn.classList.add('readtoggle');
        readToggleBtn.textContent = 'Toggle Read';
        btnContainer.appendChild(readToggleBtn);

        card1.appendChild(btnContainer);

        libraryContainer.appendChild(card1);
    }

    addRemoveButtons();
    addReadToggle();
}

displayLibrary();

// Add New Book Button Functionality
const addBookModal = document.querySelector('.modal');

const addBookBtn = document.querySelector('#addnewbook');
addBookBtn.addEventListener('click', function() {
    
    addBookModal.style.display = 'inline-block';
});

// Form Functionality

    let fieldSet = document.querySelector('fieldset');
    let errorBox = document.createElement('div');
    let errorMessage = document.createElement('p');
    errorBox.classList.add('errorbox');
    errorBox.appendChild(errorMessage);
    fieldSet.appendChild(errorBox);

const inputBookBtn = document.querySelector('#formbtn');
inputBookBtn.addEventListener('click', function() {
    event.preventDefault();

    let newTitle = document.querySelector('#booktitle');
    let newAuthor = document.querySelector('#bookauthor');
    let newYear = document.querySelector('#bookyear');
    // Reset Borders
    newTitle.style.borderColor = 'lightgray';
    newAuthor.style.borderColor = 'lightgray';
    newYear.style.borderColor = 'lightgray';

    let readRadio = document.querySelector('#yesread');
    let haveRead = false;
    if (readRadio.checked === true) {
        haveRead = true;
    } 

    

    errorMessage.textContent = '';

    // Error function
    function showError(message) {
        errorMessage.textContent = message;
    }

    // Test for blank values, non-number year, or year in future
    if (newTitle.value === '') {
        console.log('Book must have a title');
        showError('All fields must be filled out.');
        newTitle.style.borderColor = 'red';
        return;
    } else if (newAuthor.value === '') {
        console.log('Book must have an author');
        showError('All fields must be filled out.');
        newAuthor.style.borderColor = 'red';
        return;
    } else if (newYear.value === '') {
        console.log('Book must have a published year');
        showError('All fields must be filled out.');
        newYear.style.borderColor = 'red';
        return;
    }
    if (Number.isNaN(+newYear.value)) {
        console.log('Year must be a number');
        showError('Year must be a number.');
        newYear.style.borderColor = 'red';
        return;
    }
    let currentYear = new Date().getFullYear();
    if (newYear.value > currentYear) {
        console.log('Year is in the future');
        showError('This book was not published in the future...');
        newYear.style.borderColor = 'red';
        return;
    }

    // Add Book to Library and Display Library anew
    addBook(newTitle.value, newAuthor.value, newYear.value, haveRead);

    displayLibrary();

    // Reset Form and Modal
    newTitle.value = '';
    newAuthor.value = '';
    newYear.value = '';
    readRadio.checked = false;

    addBookModal.style.display = 'none';
});

// Remove Book From Library

function addRemoveButtons() {
    const removeBtns = document.querySelectorAll('.removebtn');
    for (const item of removeBtns) {
        item.addEventListener('click', () => {
            let chosenId = item.parentElement.dataset.id;
            
            for (let i = 0; i < myLibrary.length; i++) {
                if (chosenId === myLibrary[i].userID) {
                myLibrary.splice(i, 1);
                } 
            }

            displayLibrary();
        });
    }
}

// Toggle Read Status

function addReadToggle() {
    const readToggleBtns = document.querySelectorAll('.readtoggle');
    for (const item of readToggleBtns) {
        item.addEventListener('click', () => {
            let chosenId = item.parentElement.parentElement.dataset.id;

            if (item.parentElement.parentElement.classList.contains('read')) {
                item.parentElement.parentElement.classList.remove('read');
                item.parentElement.parentElement.classList.add('unread');
            } else {
                item.parentElement.parentElement.classList.remove('unread');
                item.parentElement.parentElement.classList.add('read');
            }

            for (let i = 0; i < myLibrary.length; i++) {
                if (chosenId === myLibrary[i].userID) {
                    if (myLibrary[i].read === true) {
                        myLibrary[i].read = false;
                    } else {
                        myLibrary[i].read = true;
                    }
                }
            }
        })
    }
}



