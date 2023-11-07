import ReactPlayer from "react-player/youtube";

function VideoPlayer (){
    const URL="youtube.com/watch?v=dQw4w9WgXcQ";

    return(
        <div>
            <ReactPlayer url={URL} playing={true} muted={true} controls/>
        </div>
    )
}

export default VideoPlayer;