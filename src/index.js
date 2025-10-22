import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  img: "./images/image-1.jpg",
  title: "Wild Card (Deluxe Edition)",
  author: "Jordan Moore",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/41J61SNzQmL._UY399_FMwebp_.jpg?aicid=books-design-system-web",
  title: "How to Test Negative for Stupid",
  author: "John Kennedy",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>Click Me</button>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
