// import components
import CommentCard from "./CommentCard";
// import types
import type { Comment as CommentType } from "../types";

interface CommentsListProps {
  comments: Array<CommentType>;
  onDeleteComment?: (commentId: string | number) => void;
  onUpdateComment?: (commentId: string | number, newContent: string) => void;
}

function CommentsList({
  comments,
  onDeleteComment,
  onUpdateComment,
}: CommentsListProps) {
  const sortedComments = [...comments].sort((a, b) => b.score - a.score); // Sort comments by score in descending order

  return (
    <ul>
      {sortedComments.map((comment) => (
        <div key={comment.id}>
          <CommentCard
            comment={comment}
            onDeleteComment={onDeleteComment}
            onUpdateComment={onUpdateComment}
          />
          {comment.replies?.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              isReply
              onDeleteComment={onDeleteComment}
            />
          ))}
        </div>
      ))}
    </ul>
  );
}

export default CommentsList;
