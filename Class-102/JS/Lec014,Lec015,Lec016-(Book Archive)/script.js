let bookForm = document.getElementById("myform");

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Store{
    static getBooks(){
        let books = [];
        if(localStorage.getItem("books") === null){
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    static addBook(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
        
    }
    static removeBook(isbn){
        const books = Store.getBooks()

        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem("books",JSON.stringify(books));
    }
}

class UI{
    static display(){
        let books = Store.getBooks();
        books.forEach(book => {
            UI.addBooksToList(book);
        });
    }
    static showMessage(message,timeLimit){
        let showMsg = document.getElementById("showMessages");
        let msgBlock = document.createElement("div");
        msgBlock.setAttribute('class','msgBox');
        msgBlock.setAttribute('id','msgBox');
        let msg = document.createElement("span");
        msg.setAttribute('class','msg');
        msg.innerHTML = message;
        msgBlock.appendChild(msg);
        showMsg.appendChild(msgBlock);
        setTimeout(function(){
            document.getElementById('msgBox').remove();
        },timeLimit)
    }
    static addBooksToList(book){
        let listBook = document.getElementById("bookList");
        let tableRow = document.createElement('tr');
        
        tableRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delBook">delete</a></td>
        `;
        listBook.appendChild(tableRow);
    }
    static deleteBook(el){
        if(el.classList.contains('delBook'))
        {
            el.parentElement.parentElement.remove();
        }
    }
}


document.addEventListener('DOMContentLoaded',UI.display());

bookForm.addEventListener('submit',function(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;



    let mybook = new Book(title,author,isbn);

    Store.addBook(mybook);
    UI.addBooksToList(mybook);



});

let delbutton = document.getElementById("bookList");

delbutton.addEventListener("click",function(e){
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
   UI.showMessage("Book Deleted Successfully",2500);
});


