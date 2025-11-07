import React from "react";
import Count from "./count";
import "./Book.css"; // Import the CSS file

export default function Book(props) {
  return (
    <div className="book-card">
      <img src={props.img} alt={props.name} className="book-image" />
      <h2>{props.name}</h2>
      <p className="author">{props.author}</p>
      <p className="price">₹{props.price}</p>
      <Count />
    </div>
  );
}
