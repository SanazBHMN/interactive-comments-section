// import types
import type { Comment as CommentType } from "../types";

interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  console.log(comment);
  return <div>{comment.content}</div>;
}

export default Comment;
