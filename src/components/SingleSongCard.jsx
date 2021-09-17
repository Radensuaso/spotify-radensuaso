import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const SingleSongCard = (props) => (
  <Card className="single-song-card p-3">
    <Card.Img
      className="img-fluid"
      variant="top"
      src={props.song.album.cover_big}
      onClick={() => props.setPlayerSong(props.song)}
    />
    <Card.Body>
      <Card.Title onClick={() => props.setPlayerSong(props.song)}>
        {props.song.title}
      </Card.Title>
      <Card.Text>
        <Link className="text-muted" to={"/album/" + props.song.album.id}>
          <strong>Album: </strong>
          {props.song.album.title}
        </Link>
      </Card.Text>
      <Card.Text>
        <Link className="text-muted" to={"/artist/" + props.song.artist.id}>
          <strong>Artist: </strong>
          {props.song.artist.name}
        </Link>
      </Card.Text>
    </Card.Body>
  </Card>
)

export default SingleSongCard
