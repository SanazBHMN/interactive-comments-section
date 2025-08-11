import { useContext, useState } from "react";
import { CurrentUserContext } from "../App";
// import types
import type { Comment as CommentType } from "../types";
// import static assets
import plusIcon from "../assets/icons/icon-plus.svg";
import minusIcon from "../assets/icons/icon-minus.svg";
import replyIcon from "../assets/icons/icon-reply.svg";
import deleteIcon from "../assets/icons/icon-delete.svg";
import editIcon from "../assets/icons/icon-edit.svg";

interface CommentCardProps {
  comment: CommentType;
  isReply?: boolean;
  onDeleteComment?: (commentId: string | number) => void;
  onUpdateComment?: (commentId: string | number, newContent: string) => void;
}

function CommentCard({
  comment,
  isReply = false,
  onDeleteComment,
  onUpdateComment,
}: CommentCardProps) {
  const { id, user, content, createdAt, replies, score } = comment;

  const [isInEditMode, setIsInEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const currentUser = useContext(CurrentUserContext);

  const isOwner = comment.user.username === currentUser?.username;

  const handleUpdateContent = (commentId: string | number, content: string) => {
    onUpdateComment ? onUpdateComment(commentId, content) : undefined;
    setIsInEditMode(false);
  };

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
        {isInEditMode ? (
          <textarea
            cols={150}
            value={editedContent}
            onChange={(event) => setEditedContent(event.target.value)}
          ></textarea>
        ) : (
          <p>{editedContent}</p>
        )}
        {isInEditMode && (
          <button onClick={() => handleUpdateContent(id, editedContent)}>
            UPDATE
          </button>
        )}

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
          {isOwner ? (
            <div>
              <button
                className="flex justify-center items-center gap-1 cursor-pointer"
                aria-label="Delete comment"
                onClick={
                  onDeleteComment ? () => onDeleteComment(id) : undefined
                }
              >
                <img src={deleteIcon} alt="" />
                Delete
              </button>
              <button
                className="flex justify-center items-center gap-1 cursor-pointer"
                aria-label="Edit comment"
                onClick={() => setIsInEditMode(true)}
              >
                <img src={editIcon} alt="" />
                Edit
              </button>
            </div>
          ) : (
            <button
              className="flex justify-center items-center gap-1 cursor-pointer"
              aria-label="Reply to comment"
            >
              <img src={replyIcon} alt="" />
              Reply
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default CommentCard;
