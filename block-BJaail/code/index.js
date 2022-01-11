// # Creating a book store app using OOP

// You should have the following features in the bookly app:

// - User can add a new book by adding the name, author and url of the image
// - Once added the book will be marked not read
// - You can change the state of the book to `Read` and it will be marked as completed
// - User can delete the book

// ![DEMO](../assets/bookly.png)

let bookList = [

]


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isRead = false;
    }
    markRead() {
        this.isRead = !this.isRead;
    }
}

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", function (event) {
    event.preventDefault();
    let title = document.getElementById("title");

    let author = document.getElementById("author");
    let isbn = document.getElementById("isbn");
    bookList.push(new Book(title.value, author.value, isbn.value))
    title.value = "";
    author.value = "";
    isbn.value = "";
    let table = document.getElementById("bookTable");
    table.innerHTML = 
    `<tr>
       <th>Title</th>
       <th>Author</th>
       <th>ISBN#</th>
       <th></th>
    </tr>`
    displayBooks();
});

function displayBooks() {
    let table = document.getElementById("bookTable");
    bookList.forEach((ele) => {
        let row = document.createElement("tr")
        let title = document.createElement("td")
        title.innerText = ele.title;
        let author = document.createElement("td")
        author.innerText = ele.author;
        let isbn = document.createElement("td")
        isbn.innerText = ele.isbn;
        let isRead = document.createElement("td")
        isRead.addEventListener("click",function(event){
            ele.markRead();
            if(ele.isRead){
               event.target.innerText = "Read";
            }
            else{
                event.target.innerText = "Unread"
            }
        })
        isRead.innerText = "X";
        row.append(title, author, isbn, isRead)
        table.append(row);

    })
}
displayBooks();