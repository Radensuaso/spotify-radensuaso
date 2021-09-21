import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import SongRow from "./SongRow";
import { connect } from "react-redux";
import { fetchSongsAction } from "../redux/actions";
import Loading from "./Loading";
import AlertSpotify from "./AlertSpotify";

const mapStateToProps = (state) => ({
  rockMusic: state.media.rockMusic,
  chillOut: state.media.chillOut,
  classical: state.media.classical,
  error: state.media.error,
  loading: state.media.loading,
});

const mapDispatchToProps = (dispatch) => ({
  //functions
  fetchSongs: (query) => dispatch(fetchSongsAction(query)),
});

const HomeSpotify = ({
  rockMusic,
  chillOut,
  classical,
  error,
  loading,
  fetchSongs,
}) => {
  const queries = ["Rock Music", "Chill Out", "Classical"];

  useEffect(() => {
    fetchSongs(queries[0]);
    fetchSongs(queries[1]);
    fetchSongs(queries[2]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid id="home-spotify">
      {loading ? (
        <Loading />
      ) : error ? (
        <AlertSpotify />
      ) : (
        <>
          <SongRow title={queries[0]} songs={rockMusic && rockMusic} />
          <SongRow title={queries[1]} songs={chillOut && chillOut} />
          <SongRow title={queries[2]} songs={classical && classical} />
        </>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSpotify);
