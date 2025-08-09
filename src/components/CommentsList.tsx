// import components
import CommentCard from "./CommentCard";
// import types
import type { Comment as CommentType } from "../types";

interface CommentsListProps {
  comments: Array<CommentType>;
}

function CommentsList({ comments }: CommentsListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <>
          <CommentCard key={comment.id} comment={comment} />
          {comment.replies?.map((reply) => (
            <CommentCard key={reply.id} comment={reply} isReply />
          ))}
        </>
      ))}
    </ul>
  );
}

export default CommentsList;
