import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setfeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div classname="container">
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
