import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "./images/image-1.jpg",
    title: "Wild Card (Deluxe Edition)",
    author: "Jordan Moore",
    id: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/41J61SNzQmL._UY399_FMwebp_.jpg?aicid=books-design-system-web",
    title: "How to Test Negative for Stupid",
    author: "John Kennedy",
    id: 2,
  },
];

function BookList() {
  const getBookById = (id) => {
    const book = books.find((b) => b.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBookById={getBookById} />;
      })}
      ;
    </section>
  );
}

const Book = ({ img, title, author, getBookById, id }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBookById(id)}>Click me</button>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
