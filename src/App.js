function App() {
  const title = "Blog post";
  const body = "This is my blog post ";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];
  return (
    <div classname="container">
      <h1>{title} </h1>
      <p>{body} </p>
      <p>{Math.random() * (5 + 5)} </p>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
