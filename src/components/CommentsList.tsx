// import components
import Comment from "./Comment";
// import types
import type { Comment as CommentType } from "../types";

interface CommentsListProps {
  comments: Array<CommentType>;
}

function CommentsList({ comments }: CommentsListProps) {
  console.log(comments);
  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentsList;
