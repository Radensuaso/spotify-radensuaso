import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const AlbumJumbotron = (props) => {
  return (
    <Container
      fluid
      id="album-header-container"
      style={{
        paddingLeft: "14rem",
        color: "white",
        backgroundRepeat: "no-repeat",
        background: props.dominantColor,

        minHeight: "30vh",
      }}
    >
      <Row className="album pl-4 pb-4">
        <Col xs={12} md={6} lg={2}>
          {props.album.data && (
            <img
              className="img-fluid"
              src={props.album.data.cover_big}
              alt={props.album.data.title + " cover"}
            />
          )}
        </Col>
        <Col
          xs={12}
          md={6}
          lg={10}
          className="d-flex flex-column justify-content-end pt-3"
        >
          <h6>Album</h6>
          <h1>{props.album.data && props.album.data.title}</h1>
          {props.album.data && (
            <div className="album-info">
              <img
                className="mr-1"
                src={props.album.data.artist.picture_small}
                alt={props.album.data.artist.name + " picture"}
              />
              <span style={{ fontWeight: "700" }}>
                {props.album.data.artist.name}
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                <span className="dot-separator"> &#183; </span>
                {props.album.data.release_date.substring(0, 4)}
                <span className="dot-separator"> &#183; </span>
                {props.album.data.tracks.data.length +
                  " songs, " +
                  Math.floor(props.album.data.duration / 60) +
                  " min " +
                  (props.album.data.duration -
                    Math.floor(props.album.data.duration / 60) * 60) +
                  " sec"}
              </span>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default AlbumJumbotron
