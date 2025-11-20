function openBookstore() { 
    for (let index = 0; index < books.length; index++) {
        document.getElementById("Book_Store").innerHTML += renderBooks(index);
        checkLikedStatus(index); 
        if (books[index].comments.length > 0) {
            for (let i = 0; i < books[index].comments.length; i++) {
                document.getElementById("commentsTable" + books[index].name).innerHTML += renderComments(index, i);
                
                
            }
            
        } else {continue;}
            
        } 
    }    

function checkLikedStatus(index) {
    if (books[index].liked == true) {
        document.getElementById("button-" + books[index].name).classList.add("active");
    } else {
        document.getElementById("button-" + books[index].name).classList.remove("active");
    }
}


function heartFiller(Book) {
    document.getElementById("button-" + Book).classList.toggle("active");
    if (document.getElementById("button-" + Book).classList.contains("active")) {
        console.log("Herz gefüllt");
        
    } else {
        console.log("Herz leer");
        
    }
} 