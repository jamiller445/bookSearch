import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    // <span className="save-btn" {...props} role="button" tabIndex="0">
    //   ✗
    // </span>
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success btn-sm">
    Save Book
    {props.children}
  </button>
  );
}

export default SaveBtn;