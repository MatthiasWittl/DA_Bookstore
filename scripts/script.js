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


function heartFiller(BookName, BookLikes) {
    document.getElementById("button-" + BookName).classList.toggle("active");
    if (document.getElementById("button-" + BookName).classList.contains("active")) {
        document.getElementById("Likes-" + BookLikes).innerHTML =
        parseInt(document.getElementById("Likes-" + BookLikes).innerHTML) + 1 ;

        
    } else {
        document.getElementById("Likes-" + BookLikes).innerHTML =
        parseInt(document.getElementById("Likes-" + BookLikes).innerHTML) - 1 ;
        
    }
} 