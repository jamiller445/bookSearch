import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

 
class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    topic: '',
    booksIndex: null,
    displayBooks: [],
    addedToSave: [],
    state: ''
  };

  // Add code here to get all books from the database and save them to this.state.books
  // componentDidMount() {
  //   this.grabBooks();
  // };

  // Add code here to get all books from the database and save them to this.state.books
  // grabBooks = () => {
  //   API.getBooks().then(res => this.setState({ books: res.data })).catch(err => console.log(err));
  // };

  saveBook = id => {
    console.log("id in saveBook= ",id);
    let indexClicked = this.state.books.findIndex(x =>
      x.id === id);
    const bookToSave = this.state.books.filter((b) => {     
      return b.id === id;
    })
    this.state.books.splice(indexClicked,1);
    // console.log("newBooks Array= ",this.state.books);

    let sbook = {
      author: bookToSave[0].volumeInfo.authors,
      description: bookToSave[0].volumeInfo.description,
      image: bookToSave[0].volumeInfo.imageLinks.smallThumbnail,
      link: bookToSave[0].volumeInfo.infoLink,
      title: bookToSave[0].volumeInfo.title
    }
     
    API.saveBook(sbook)
      .then(res =>  { alert("Book has been saved!")
      this.setState({addedToSave: sbook});
      // this.setState({ state: this.state })
      
      })
      .catch(err => console.log(err));

      // this.setState({ state: this.state });
  };

  loadBooks = () => {  
    // console.log("books at top of loadbooks", this.state.books);
    API.googleBooks(this.state.topic)
        .then(res => {
          console.log("res= ",res);
        this.setState({ 
          books: [...res.data.items], 
          topic: ""})        
        })
        .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      // console.log("topic in formsubmit= ", this.state.topic)
      this.loadBooks();
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search Google Books</h1>
            </Jumbotron>
            <form>
              <Input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic" 
              placeholder="Topic Search (required)"
              />
              {/* {console.log("topic= ", this.state.topic)} */}
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            View Saved
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
