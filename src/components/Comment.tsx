// import types
import type { Comment as CommentType } from "../types";
// import static assets
import plusIcon from "../assets/icons/icon-plus.svg";
import minusIcon from "../assets/icons/icon-minus.svg";
import replyIcon from "../assets/icons/icon-reply.svg";

interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  // console.log(comment);
  const { id, user, content, createdAt, replies, score } = comment;

  return (
    <li className="border p-2 mb-2">
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

        {/* {replies && (
          <div className="border-red-500 border-l-2 pl-4">
            {replies?.map((reply) => (
              <p key={reply.id} className="border-b pb-2">
                {reply.content}
              </p>
            ))}
          </div>
        )} */}
      </div>
    </li>
  );
}

export default Comment;
