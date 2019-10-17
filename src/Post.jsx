import React, { useState } from "react";

import Button from "muicss/lib/react/button";

export default function Post(props) {
  const [likes, setlikes] = useState(0);
  const updateLike = () => {
    setlikes(likes + 1);
  };
  const liike = props.likes + likes;
  return (
    <div className="posts">
      <h2>{props.author}</h2>
      <h2>{props.message}</h2>
      <h3>{liike} likes</h3>
      <Button color="primary" onClick={updateLike}>
        Like post
      </Button>

      <AddCommentForm />
      <ol>
        {props.comments.map(comment => {
          return (
            <Comment
              key={comment._id}
              author={comment.author}
              comment={comment.comment}
            />
          );
        })}
      </ol>
    </div>
  );
}
function AddCommentForm() {
  return <p>CommentForm</p>;
}

function Comment(props) {
  return (
    <div>
      <li>
        {props.author} said: {props.comment}
      </li>
    </div>
  );
}
