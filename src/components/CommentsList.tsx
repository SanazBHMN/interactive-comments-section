// import components
import CommentCard from "./CommentCard";
// import types
import type { Comment as CommentType } from "../types";

interface CommentsListProps {
  comments: Array<CommentType>;
}

function CommentsList({ comments }: CommentsListProps) {
  const sortedComments = [...comments].sort((a, b) => b.score - a.score); // Sort comments by score in descending order

  return (
    <ul>
      {sortedComments.map((comment) => (
        <div key={comment.id}>
          <CommentCard comment={comment} />
          {comment.replies?.map((reply) => (
            <CommentCard key={reply.id} comment={reply} isReply />
          ))}
        </div>
      ))}
    </ul>
  );
}

export default CommentsList;
