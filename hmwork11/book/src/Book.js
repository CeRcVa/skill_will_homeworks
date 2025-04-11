import React from "react";

const Book = ({ image, title, description, Writer, onButtonClick }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", maxWidth: "300px" }}>
      <img src={image} alt={title} style={{ width: "100%" }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>მწერალი:</h4>
      <ul>
        {Writer.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button onClick={() => onButtonClick(title, Writer)}>Print Info</button>
    </div>
  );
};

export default Book;
