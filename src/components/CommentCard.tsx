import type { Comment as CommentType } from "../types";
// import static assets
import plusIcon from "../assets/icons/icon-plus.svg";
import minusIcon from "../assets/icons/icon-minus.svg";
import replyIcon from "../assets/icons/icon-reply.svg";

interface CommentCardProps {
  comment: CommentType;
  isReply?: boolean;
}

function CommentCard({ comment, isReply = false }: CommentCardProps) {
  const { id, user, content, createdAt, replies, score } = comment;

  return (
    <li
      className={`border p-2 mb-2 ${
        isReply ? "ml-8 border-l-2 pl-4 border-gray-300" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <img src={user.image.webp} alt={`${user.username}'s avatar`} />
          <span>{user.username}</span>
          <span>{createdAt}</span>
        </div>
        <p>{content}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button className="cursor-pointer" aria-label="Upvote comment">
              <img src={plusIcon} alt="" />
            </button>
            {score}
            <button className="cursor-pointer" aria-label="Downvote comment">
              <img src={minusIcon} alt="" />
            </button>
          </div>
          <button
            className="flex justify-center items-center gap-1 cursor-pointer"
            aria-label="Reply to comment"
          >
            <img src={replyIcon} alt="" />
            Reply
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentCard;
