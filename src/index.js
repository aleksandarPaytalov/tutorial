import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "Jordan Moore";
const Book = () => {
  const title = "Wild Card (Deluxe Edition)";
  const img = "./images/image-1.jpg";

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
