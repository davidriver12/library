//Create array of books
let myLibrary = [];

//Book object constructor
function Book(title, author, pages, read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

//Adds book to array
Book.prototype.addtoLibrary = function(){
    myLibrary.push(this);
}

//loops over library array and prints all books
function showLibrary(){
    containerDiv.replaceChildren();
    for (book of myLibrary){
        let card = document.createElement('div');
        let titleH3 = document.createElement('h3');
        titleH3.textContent = `Title: ${book.title}`;
        let authorP = document.createElement('p');
        authorP.textContent = `By: ${book.author}`
        let pagesP = document.createElement('p');
        pagesP.textContent = `Number of pages: ${book.pages}`;
        let dataAttribute  = myLibrary.indexOf(book);
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function(){
            removeBtn.parentElement.remove();
            myLibrary.splice(dataAttribute, 1);
        })
        card.appendChild(titleH3);
        card.appendChild(authorP);
        card.appendChild(pagesP);
        card.appendChild(removeBtn);
        if (book.read) {
            card.classList.add('card', 'read');
        } else {
            card.classList.add('card');
        }
        containerDiv.appendChild(card);
    }
}

//Add functionality to Add book Button
const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

//Add functionality to create book button
const createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', function(){
    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    if (document.getElementById("read").checked){
        newRead = true;
    } else {
        newRead = false;
    }
    var newBook = new Book(newTitle, newAuthor, newPages, newRead);
    newBook.addtoLibrary();
    modalBg.classList.remove('bg-active');
    showLibrary();
})

const containerDiv = document.querySelector('#container');
const goT = new Book('A Game of Thrones', 'George R.R. Martin', 694, true);
goT.addtoLibrary();
showLibrary();