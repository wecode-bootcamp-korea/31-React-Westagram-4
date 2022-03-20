import React, { useState } from 'react';

const CommentInput = () => {
  const [comment, setComment] = useState([]);

  function handleCommentInput(event) {
    setComment(event.target.value);
    console.log(comment);
  }
  return (
    <form className="commentInputWrapper">
      <input id="commentInput" type="text" placeholder="댓글 달기..." />
      <button id="submit" onChange={handleCommentInput}>
        게시
      </button>
    </form>
  );
};

export default CommentInput;
