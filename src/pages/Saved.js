import React from "react";
// import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Link } from "react-router-dom";

function Saved() {

  return (
    <div>
      <h1>Saved Books</h1>
      <p>
  <List>
      
      <ListItem>
        {/* <Link to={"/books/" + book.volumeInfo.title}> */}
          <strong>
            
            Title: 
            <br />
            {/* Author:  {book.volumeInfo.authors.map((author,i) => {
              return author + "  ";
            })} */}
            Author: 
            <br />
            Description:  
            <br />
            
            <br />
            InfoLink: 
          
            
          </strong>
          {/* </Link> */}
        
        <DeleteBtn 
        // onClick={() => this.saveBook(book.id)}
        />
      </ListItem>
    )}
  </List>
 }
    )

    </p>
    </div>
  )
    } 
export default Saved;


