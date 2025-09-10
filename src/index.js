import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <article className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </article>
  );
}

const Book = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => (
  <img src="./images/image-1.jpg" alt="Wild Card (Deluxe Edition)" />
);
const Title = () => <h2>Wild Card (Deluxe Edition)</h2>;
const Author = () => {
  return <h4>Rose Hill</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
