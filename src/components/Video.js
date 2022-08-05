import video from "../data/video.js";

function Video(){
  return (
    <div>
    <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <h4>{video.views} | {video.createdAt}</h4>
      </div>
  )
}

export default Video;