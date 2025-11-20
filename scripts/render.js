function renderBooks (index) {
    return `
            <section class="book_Container" >
            <div>
                <h2>${books[index].name}</h2>
            </div>
            <div class="book_Image" >
                <img src="images/book.jpg" alt="Buch">
            </div>
            <section class="book_Price_Like" >
                <span class="price_Tag" >${books[index].price}€</span>
                <div class="like_Container">
                    <span id="Likes ${books[index].name}" >${books[index].likes}€</span>
                    <button class="heart" id="button-${books[index].name}" onclick="heartFiller('${books[index].name}')" ></button>
                </div>
                
            </section>
            <article class="book_Description" >
                <table>
                        <tr>
                            <td>Author</td>
                            <td>: ${books[index].author}</td>
                        </tr>
                        <tr>
                            <td>Erscheinungsjahr</td>
                            <td>: ${books[index].publishedYear}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>: ${books[index].genre}</td>
                        </tr>
                </table>
            </article>
            <section class="book_Comments" >
                <h3>Kommentare:</h3>
                <div class="overflowed" >
                    <table id="commentsTable${books[index].name}">
                    </table>
                </div>
            </section>
            <section class="book_Add_Comment" >
                <input class="add_Comment_input" type="text" placeholder="Schreibe einen Kommentar...">
                <button type="button">&#10003</button>
            </section>

            
            
        </section>

    `
}

function renderComments(index, i) {
    return `
        <tr>
            <td>${books[index].comments[i].name}</td>
            <td>: ${books[index].comments[i].comment}</td>
        </tr>
    `
    
    
    
}