export const Book = ({ img, title, author, getBookById, id, bookNumber }) => {
  return (
    <>
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={() => getBookById(id)}>Click me</button>
        <h4>{author} </h4>
        <span className="number">{`# ${bookNumber + 1}`}</span>
      </article>
    </>
  );
};
