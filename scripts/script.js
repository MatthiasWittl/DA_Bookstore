function openBookstore() { 
    for (let index = 0; index < books.length; index++) {
        document.getElementById("Book_Store").innerHTML += renderBooks(index);
        if (books[index].comments.length > 0) {
            for (let i = 0; i < books[index].comments.length; i++) {
                document.getElementById("commentsTable" + books[index].name).innerHTML += renderComments(index, i);
                
                
            }
            
        } else {continue;}
            
        }
    }    