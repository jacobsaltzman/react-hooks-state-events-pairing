import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments.js"

function Buttons(){


  const [countUp, setCountUp] = useState(video.upvotes)
    function upvoteIncrement(){
      setCountUp(countUp + 1)
    }
  const [countDown, setCountDown] = useState(video.downvotes)
    function downvoteIncrement(){
      setCountDown(countDown + 1)
    }

 

    const [show, toggleShow] = useState(true);
    const comments = show ? <Comments /> : "";
    
    function handleClick(){
      toggleShow((show) => !show);
      
    }
  


  return(
    <div>
      <button onClick={upvoteIncrement}>{countUp}👍</button>
      <button onClick={downvoteIncrement}>{countDown}👎</button>
      <button onClick={handleClick}>{show ? "Hide Comments" : "Show Comments"}</button>
      {comments}
    </div>
  )
}

export default Buttons;