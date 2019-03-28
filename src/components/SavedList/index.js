<h1>Saved Books</h1>
            
            {/* <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}> */}
            <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Go to Saved Books
            </Link>
            
            
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book,index) => (
                  
                  <ListItem key={book.id}>
                    {/* <Link to={"/books/" + book.volumeInfo.title}> */}
                      <strong>
                        
                        Title: {book.volumeInfo.title}
                        <br />
                        {/* Author:  {book.volumeInfo.authors.map((author,i) => {
                          return author + "  ";
                        })} */}
                        Author:  {book.volumeInfo.authors}
                        <br />
                        Description:  {book.volumeInfo.description}
                        <br />
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
                        <br />
                        InfoLink: <a href={book.volumeInfo.infoLink}>{book.volumeInfo.infoLink}</a>
                      
                        
                      </strong>
                      {/* </Link> */}
                    
                    <SaveBtn 
                    onClick={() => this.saveBook(book.id)}
                    />
                  </ListItem>
                ))}
              </List>
             ) : (
                <h3>No Results to Display</h3>
                )}    
             