import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SingleSongCard from "./SingleSongCard"
import Loading from "./Loading"
import AlertSpotify from "./AlertSpotify"

const SongRowEntire = (props) => (
  <>
    <h2 className="row-title">
      {props.title}
    </h2>
    <Row className="trending-artist-row mb-4">
      {
        props.songs.map((song) => (
          <Col key={song.id} className="mb-3" xm={12} sm={6} md={4} lg={2}>
            <SingleSongCard setPlayerSong={props.setPlayerSong} song={song} />
          </Col>))
      }

    </Row>
  </>
)

export default SongRowEntire
