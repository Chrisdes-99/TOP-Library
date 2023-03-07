const table = document.getElementById("bookTable");
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
    const countTracker = document.querySelector('.count');

    const newCard = document.createElement('div');
    newCard.className = "newCard"

    const bookHeader = document.createElement('h4');
    const authorHeader = document.createElement('h4');
    const pageHeader = document.createElement('h4');
    
    let count = 0;

    for(let book of bookArray){
        bookHeader.textContent = ` Book Title: ${book.title}`;
        authorHeader.textContent = ` Author: ${book.author}`;
        pageHeader.textContent = ` Pages: ${book.pages}`;

        count ++;
    }

    countTracker.textContent = count;

    cards.appendChild(newCard);
    newCard.appendChild(bookHeader);
    newCard.appendChild(authorHeader);
    newCard.appendChild(pageHeader);
}

function addBooktoLibrary(){
    let newBook = new Book();

    books.push(newBook);

    bookCard(books);

    console.log(books);
}











