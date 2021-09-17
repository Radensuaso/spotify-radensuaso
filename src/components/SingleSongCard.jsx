import Card from "react-bootstrap/Card"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { selectAction } from "../redux/actions"
import { addToLibAction, removeFromLibAction } from "../redux/actions/index.js"
import { FaHeart } from "react-icons/fa"


const mapStateToProps = (state) => ({ libraryList: state.library.libraryList })
const mapDispatchToProps = (dispatch) => ({
  setPlayerSong: (song) => {
    dispatch(selectAction(song))
  },
  addToLib: (song) => {
    dispatch(addToLibAction(song))
  },
  removeFromLib: (song) => {
    dispatch(removeFromLibAction(song))
  },
})

const SingleSongCard = ({ song, setPlayerSong, libraryList, addToLib, removeFromLib }) => (
  <Card className="single-song-card p-3">
    <Card.Img
      className="img-fluid"
      variant="top"
      src={song.album.cover_big}
      onClick={() => setPlayerSong(song)}
    />
    <Card.Body>
      <Card.Title onClick={() => setPlayerSong(song)}>
        {song.title}
      </Card.Title>
      <Card.Text>
        <Link className="text-muted" to={"/album/" + song.album.id}>
          <strong>Album: </strong>
          {song.album.title}
        </Link>
      </Card.Text>
      <Card.Text>
        <Link className="text-muted" to={"/artist/" + song.artist.id}>
          <strong>Artist: </strong>
          {song.artist.name}
        </Link>
      </Card.Text>
      {libraryList.includes(song) ? <div onClick={()=> removeFromLib(song)} className="text-danger"><FaHeart /></div> : <div onClick={()=> addToLib(song)}><FaHeart /></div> }
    </Card.Body>
  </Card>
)

export default connect(mapStateToProps, mapDispatchToProps)(SingleSongCard)
