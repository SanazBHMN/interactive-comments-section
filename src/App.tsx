import { createContext } from "react";
// import components
import CommentsList from "./components/CommentsList";
// import types
import type { User } from "./types";
// import static data
import data from "../utils/data.json";

export const CurrentUserContext = createContext<User | null>(null);

function App() {
  const comments = data.comments;
  const currentUser = data.currentUser;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CommentsList comments={comments} />
    </CurrentUserContext.Provider>
  );
}

export default App;
