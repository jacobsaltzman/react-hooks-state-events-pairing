import React from "react";
import video from "../data/video.js";

const comments = video.comments.map(({user, comment}) => (
  <div>
    <h2>{user}</h2>
    <h3>{comment}</h3>
  </div>
)
)


function Comments(){
  return (
    <div>
      {comments}
    </div>
  )
}

export default Comments;