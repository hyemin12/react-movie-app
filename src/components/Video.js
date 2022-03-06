import ReactPlayer from "react-player/lazy";

function Video({ media }) {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          key={media[0].key}
          url={`https://www.youtube.com/watch?v=${media[0].key}&origin=http://localhost:3000/movie`}
          width="800px"
          height="500px"
          pip={true}
        />
      </div>
    </>
  );
}

export default Video;
