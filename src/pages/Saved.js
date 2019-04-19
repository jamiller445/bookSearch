// import React from "react";
import React , { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";
// import SaveBtn from "../components/SaveBtn";
// import { Input, FormBtn } from "../components/Form";
// import { Col, Row, Container } from "../components/Grid";

class Saved extends Component {

  state = {
    booksFromDb: []
  };

deleteBook = id => {
  API.deleteBook(id)
    .then(res => {alert("Book has been deleted!")
    this.loadSaved();
    this.setState({ state: this.state });
    })
    .catch(err => console.log(err));

    this.setState({ state: this.state });
};

loadSaved = () => {
  API.getBooks()
    .then(res => {
      this.setState({ booksFromDb: [...res.data]})
     })
    .catch(err => console.log(err));   
};

  // componentDidMount() {
  //     this.setState({ state: this.state });
  //     this.loadSaved();
  // };

  render() {
    this.loadSaved();
    return (
      <div>
        <h1>Saved Books</h1>
        {this.state.booksFromDb.length ? (
        <List>
          {this.state.booksFromDb.map((book,index) => (
          <ListItem key={book._id}>
      
          <strong>
            
            Title: {book.title}
            <br />            
            Author:   {book.author}
            <br />
            Description: {book.description} 
            <br />
            <img src={book.image} alt="" />
            <br />
            InfoLink: <a href={book.link}>{book.link}</a>
                     
          </strong>
        
        <DeleteBtn 
        onClick={() => this.deleteBook(book._id)}
        />
      </ListItem>
    ))}
  </List>
  ) : (
    <h3>No Results to Display</h3>
   )}
    {/* </p> */}
    </div>
    );
  }
}
export default Saved;


