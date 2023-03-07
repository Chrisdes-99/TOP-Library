
let books = [];

document.getElementById("submitForm").addEventListener("click", function(event){
    event.preventDefault();
    addBooktoLibrary();
    const bookName = document.getElementById("bookName");
    const authorName = document.getElementById("authorName");
    const numOfPages = document.getElementById("bookPages");
    bookName.value = "";
    authorName.value = "";
    numOfPages.value = "";

  });

function Book() {
        this.title = document.getElementById("bookName").value;
        this.author = document.getElementById("authorName").value;
        this.pages = document.getElementById("bookPages").value;
}

function bookCard(bookArray){
    const cards = document.querySelector('.cards');

    const newCard = document.createElement('div');
    newCard.className = "newCard"

    const bookHeader = document.createElement('h4');
    const authorHeader = document.createElement('h4');
    const pageHeader = document.createElement('h4');

    const newButton = document.createElement('button');
    newButton.className = "removeButton";


    for(let book of bookArray){
        bookHeader.textContent = ` Book Title: ${book.title}`;
        authorHeader.textContent = ` Author: ${book.author}`;
        pageHeader.textContent = ` Pages: ${book.pages}`;
        newButton.textContent = 'Remove';
    }

    cards.appendChild(newCard);
    newCard.appendChild(bookHeader);
    newCard.appendChild(authorHeader);
    newCard.appendChild(pageHeader);
    newCard.appendChild(newButton);

    newButton.onclick = (e) =>{
        e.removeBook(this);
    }
}

function addBooktoLibrary(){
    let newBook = new Book();

    books.push(newBook);

    bookCard(books);

    bookCount();

    console.log(books);
}

function removeBook(book){
    book.parentNode.remove();
}

function bookCount(){
    const countTracker = document.querySelector('.count');

    countTracker.textContent = books.length;

    return countTracker;
}









