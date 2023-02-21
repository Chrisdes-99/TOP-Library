
document.getElementById("submitForm").addEventListener("click", function(event){
    event.preventDefault()
    addBooktoLibrary();

    const bookName = document.getElementById("bookName");
    const authorName = document.getElementById("authorName");
    const numOfPages = document.getElementById("bookPages");
    bookName.value = "";
    authorName.value = "";
    numOfPages.value = "";
  });

let books = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBooktoLibrary(){

    let newTitle = document.getElementById("bookName").value;
    let newAuthor = document.getElementById("authorName").value;
    let newPages = document.getElementById("bookPages").value;

    if(newTitle == "" || newAuthor =="" || newPages == ""){
        console.log("Please Enter");
    }
    else{
    let newBook = new Book(newTitle,newAuthor,newPages);

    books.push(newBook);

    console.log(books);}
}


