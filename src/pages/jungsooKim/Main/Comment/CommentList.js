import '../MainJung.scss';
import '../../../../styles/common.scss';
import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function CommnetList() {
  const [commentlist, setCommentlist] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentlist(data);
      });
  }, []);

  return (
    <div className="commentList">
      <h1>목데이터</h1>
      <ul>
        {commentlist.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommnetList;
