import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import components
import CommentsList from "./components/CommentsList";
// import types
import type { Comment, User } from "./types";
// import static data
import data from "../utils/data.json";

export const CurrentUserContext = createContext<User | null>(null);

function App() {
  const [comments, setComments] = useState<Comment[]>(data.comments);
  const [userComment, setUserComment] = useState("");
  const currentUser = data.currentUser;

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (userComment.trim() === "") return; // Prevent submission of empty comments

    const newComment = {
      id: uuidv4(),
      content: userComment,
      createdAt: new Date().toLocaleDateString(),
      score: 0,
      user: currentUser,
      replies: [],
    };

    setComments((prevComments) => [...prevComments, newComment]);

    setUserComment(""); // Clear the textarea after submission
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserComment(event.target.value);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CommentsList comments={comments} />
      <form
        onSubmit={onSubmitHandler}
        className="flex justify-between items-start border gap-2 mt-4 p-4"
      >
        <img src={currentUser.image.png} alt={`${currentUser}'s avatar`} />
        <textarea
          name=""
          id=""
          placeholder="Add a comment..."
          value={userComment}
          onChange={onChangeHandler}
        >
          {userComment}
        </textarea>
        <button type="submit">SEND</button>
      </form>
    </CurrentUserContext.Provider>
  );
}

export default App;
