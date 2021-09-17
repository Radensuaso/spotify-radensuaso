import Container from "react-bootstrap/Container"
import ArtistJumbotron from "./ArtistJumbotron"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import SongRow from "./SongRow"

const ArtistPage = (props) => {
  const [artist, setArtist] = useState({
    data: null,
    loading: true,
    error: false,
  })

  const [trackList, setTrackList] = useState({
    data: [],
    loading: true,
    error: false,
  })

  /* fetch artist */
  useEffect(() => {
    const artistUrl =
      "https://striveschool-api.herokuapp.com/api/deezer/artist/"

    const artistID = props.match.params.artistID

    fetchGet(artistUrl, setArtist, artistID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist.loading])

  /* fetch artist tracklist */
  useEffect(() => {
    artist.data && fetchGet(artist.data.tracklist, setTrackList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist.data])

  return (
    <>
      {artist.data && <ArtistJumbotron artist={artist.data} />}
      <Container fluid id="artist-container" className="pt-5">
        <SongRow
          title={"Top 5 Songs"}
          songs={trackList}
          setPlayerSong={props.setPlayerSong}
        />
      </Container>
    </>
  )
}

export default ArtistPage
