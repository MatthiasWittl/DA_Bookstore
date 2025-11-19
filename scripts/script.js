function openBookstore() { 
    for (let index = 0; index < books.length; index++) {
        document.getElementById("Book_Store").innerHTML += renderBooks(index);
    }
    console.log(books[1].name);
    
}