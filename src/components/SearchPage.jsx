import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import SongRowEntire from "./SongRowEntire"

const SearchPage = ({ setPlayerSong }) => {
  const [query, setQuery] = useState("")
  const [songs, setSongs] = useState({
    data: [],
    loading: true,
    error: false,
  })

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  useEffect(() => {
    fetchGet(url, setSongs, query ? query : "muse")
  }, [query])

  return (
    <Container fluid id="search-container">
      <Row>
        <Col xs={12} md={8} lg={4}>
          <Form.Group className="search-field">
            <Form.Control
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              size="lg"
              type="text"
              placeholder="Artists, songs, or podcasts"
            />
          </Form.Group>
        </Col>
      </Row>
      <SongRowEntire
        title={"Searched Songs"}
        songs={songs}
        setPlayerSong={setPlayerSong}
      />
    </Container>
  )
}

export default SearchPage
