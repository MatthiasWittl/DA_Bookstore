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
                    <span>2650</span>
                    <button class="heart"></button>
                </div>
                
            </section>
            <article class="book_Description" >
                <table>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                </table>
            </article>
            <section class="book_Comments" >
                <h3>Kommentare:</h3>
                <div class="overflowed" >
                <table>
                    
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                </div>
            </table>
            </section>
            <section class="book_Add_Comment" >
                <input class="add_Comment_input" type="text" placeholder="Schreibe einen Kommentar...">
                <button type="button">&#10003</button>
            </section>

            
            
        </section>

    `
}