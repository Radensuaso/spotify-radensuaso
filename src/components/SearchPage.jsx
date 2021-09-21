import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import SongRowEntire from "./SongRowEntire";
import { connect } from "react-redux";
import { fetchSongsAction } from "../redux/actions/index";
import Loading from "./Loading";
import AlertSpotify from "./AlertSpotify";

const mapStateToProps = (state) => ({
  search: state.media.search,
  error: state.media.error,
  loading: state.media.loading,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  fetchSongs: (query) => dispatch(fetchSongsAction(query)),
});

const SearchPage = ({ search, error, loading, fetchSongs }) => {
  useEffect(() => {
    fetchSongs("metallica");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid id="search-container">
      <Row>
        <Col xs={12} md={8} lg={4}>
          <Form.Group className="search-field">
            <Form.Control
              onChange={(e) => fetchSongs(e.target.value)}
              size="lg"
              type="text"
              placeholder="Artists, songs, or podcasts"
            />
          </Form.Group>
        </Col>
      </Row>
      {loading ? (
        <Loading />
      ) : error ? (
        <AlertSpotify />
      ) : (
        <SongRowEntire title={"Searched Songs"} songs={search} />
      )}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
