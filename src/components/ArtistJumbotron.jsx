import { GoVerified } from "react-icons/go"
import Container from "react-bootstrap/Container"

const ArtistJumbotron = ({ artist }) => {
  return (
    <Container
      fluid
      id="artist-header-container"
      style={{
        paddingLeft: "14rem",
        color: "white",
        backgroundRepeat: "no-repeat",
        background:
          "url(" + artist.picture_big + ") no-repeat center center / cover",

        height: "40vh",
      }}
    >
      <div className="d-flex pl-4 pb-4">
        <p className="verified-artist">
          <span className="pr-2">
            <GoVerified />
          </span>
          Verified Artist
        </p>
        <h1>{artist.name}</h1>
      </div>
    </Container>
  )
}

export default ArtistJumbotron
