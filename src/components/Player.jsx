import { withRouter } from "react-router-dom"
import {
  FaPlay,
  FaHeart,
  FaListAlt,
  FaListOl,
  FaVolumeUp,
  FaPause,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaRedoAlt,
  FaVolumeMute,
  FaExpandAlt,
} from "react-icons/fa"
import { BsSpeaker } from "react-icons/bs"
import { Link } from "react-router-dom"

const Player = (props) => {
  return (
    <footer className="d-flex p-3">
      {/* Song currently playing section */}
      <div className="song-playing-footer d-flex">
        <img
          className="pr-3 img-fluid"
          src={props.playerSong.album.cover_big}
          alt={props.playerSong.album.title + " cover"}
          style={{ width: "100px" }}
        />
        <div className="pr-3 text-nowrap">
          <Link
            className="text-Light"
            to={"/album/" + props.playerSong.album.id}
          >
            {props.playerSong.title}{" "}
          </Link>{" "}
          <br />
          <span className="small">
            <Link
              className="text-Light"
              to={"/artist/" + props.playerSong.artist.id}
            >
              {props.playerSong.artist.name}
            </Link>
          </span>
        </div>
        <div>
          <span className="footer-icons heart-footer pr-3">
            <FaHeart />
          </span>
          <span className="footer-icons show-image-footer">
            <FaListAlt />
          </span>
        </div>
      </div>
      {/*  controls section  */}
      <div className="controls-footer d-flex">
        <div className="controls-icons">
          <span className="footer-icons shuffle-footer pr-3">
            <FaRandom />
          </span>
          <span className="footer-icons previous-footer pr-3">
            <FaStepBackward />
          </span>
          <div className="d-inline-block pr-3">
            {/* Play and pause */}
            <div style={{ height: "40px", width: "40px" }}>
              <div className="play-pause d-flex">
                <span className="footer-icons play-footer">
                  <FaPlay />
                </span>

                <span className="footer-icons pause-footer d-none">
                  <FaPause />
                </span>
              </div>
            </div>
          </div>
          <span className="footer-icons next-footer pr-3">
            <FaStepForward />
          </span>
          <span className="footer-icons repeat-footer">
            <FaRedoAlt />
          </span>
        </div>
        <div className="song-timer-container d-flex mt-3">
          <span className="small d-inline-block pr-2">0:00</span>
          <span className="mt-n1">
            <input
              type="range"
              min="1"
              max="100"
              defaultValue
              className="slider mb-n1"
              id="song-timer"
            />
          </span>
          <span className="small d-inline-block pl-2">5:54</span>
        </div>
      </div>
      {/* Volume controls section */}
      <div className="volume-section-footer d-flex">
        <span className="footer-icons queue-footer pr-3">
          <FaListOl />
        </span>
        <span className="footer-icons system-footer pr-3">
          <BsSpeaker />
        </span>
        {/* adding two volume speaker icons to toggle them on and off depending on click */}
        <div className="speaker-container pr-3">
          <span className="footer-icons speaker-on-footer">
            <FaVolumeUp />
          </span>
          <span className="footer-icons speaker-off-footer d-none">
            <FaVolumeMute />
          </span>
        </div>
        <span className="mt-n1 pr-3">
          <input
            type="range"
            min="1"
            max="100"
            defaultValue
            className="slider"
            id="volume-range"
          />
        </span>
        <span className="footer-icons expand-footer pr-3">
          <FaExpandAlt />
        </span>
      </div>
    </footer>
  )
}

export default withRouter(Player)
