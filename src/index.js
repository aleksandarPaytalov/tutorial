import React from "react";
import ReactDOM from "react-dom/client";

import books from "./books";
import { Book } from "./Book";

import "./index.css";

function BookList() {
  const getBookById = (id) => {
    const book = books.find((b) => b.id === id);
    console.log(book);
  };

  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBookById={getBookById}
              bookNumber={index}
            />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
