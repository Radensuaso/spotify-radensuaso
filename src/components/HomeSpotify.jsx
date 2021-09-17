import { useState, useEffect } from 'react';
import fetchGet from '../functions/fetchGet';
import Container from 'react-bootstrap/Container';
import SongRow from './SongRow';
import { connect } from 'react-redux';
import { fetchSongsAction } from '../redux/actions';

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
  setPlayerSong,
  rockMusic,
  chillOut,
  classical,
  error,
  loading,
  fetchSongs,
}) => {
  const queries = ['Rock Music', 'Chill Out', 'Classical'];

  useEffect(() => {
    fetchSongs(queries[0]);
    fetchSongs(queries[1]);
    fetchSongs(queries[2]);
  }, []);

  return (
    <Container fluid id="home-spotify">
      <SongRow
        title={queries[0]}
        songs={rockMusic && rockMusic}
        setPlayerSong={setPlayerSong}
      />
      <SongRow
        title={queries[1]}
        songs={chillOut && chillOut}
        setPlayerSong={setPlayerSong}
      />
      <SongRow
        title={queries[2]}
        songs={classical && classical}
        setPlayerSong={setPlayerSong}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSpotify);
