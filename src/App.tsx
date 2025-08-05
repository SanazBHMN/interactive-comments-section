// import components
import CommentsList from "./components/CommentsList";
// import static data
import data from "../utils/data.json";

function App() {
  // console.log(data);

  const comments = data.comments;

  return (
    <div className="App">
      <h1>Interactive Comments Section</h1>
      <CommentsList comments={comments} />
    </div>
  );
}

export default App;
