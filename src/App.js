function App() {
  const title = "Blog post";
  const body = "This is my blog post ";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];
  const loading = false;
  if (loading) return <h1>Loading...</h1>;
  const showComments = true;

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div classname="container">
      <h1>{title} </h1>
      <p>{body} </p>
      {showComments && commentBlock}
      <p>{Math.random() * (5 + 5)} </p>
    </div>
  );
}

export default App;
