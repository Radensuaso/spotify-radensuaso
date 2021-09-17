import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavSpotify from "./components/NavSpotify"
import Player from "./components/Player"
import HomeSpotify from "./components/HomeSpotify"
import ArtistPage from "./components/ArtistPage"
import AlbumPage from "./components/AlbumPage"
import SearchPage from "./components/SearchPage"
import { useState } from "react"

const App = () => {
  const [playerSong, setPlayerSong] = useState({
    id: 568120982,
    readable: true,
    title: "Bohemian Rhapsody",
    title_short: "Bohemian Rhapsody",
    title_version: "",
    link: "https://www.deezer.com/track/568120982",
    duration: 354,
    rank: 840501,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5867c698eeaf9fdde5db302de72e9f36-8.mp3",
    md5_image: "8b8fc5d117f9357b79f0a0a410a170e8",
    artist: {
      id: 412,
      name: "Queen",
      link: "https://www.deezer.com/artist/412",
      picture: "https://api.deezer.com/artist/412/image",
      picture_small:
        "https://cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/1000x1000-000000-80-0-0.jpg",
      tracklist:
        "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50",
      type: "artist",
    },
    album: {
      id: 75621062,
      title: "Bohemian Rhapsody (The Original Soundtrack)",
      cover: "https://api.deezer.com/album/75621062/image",
      cover_small:
        "https://cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/1000x1000-000000-80-0-0.jpg",
      md5_image: "8b8fc5d117f9357b79f0a0a410a170e8",
      tracklist: "https://api.deezer.com/album/75621062/tracks",
      type: "album",
    },
    type: "track",
  })

  return (
    <Router>
      <div className="App">
        <NavSpotify />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <HomeSpotify {...routerProps} setPlayerSong={setPlayerSong} />
          )}
        />
        <Route
          path="/search"
          render={(routerProps) => (
            <SearchPage {...routerProps} setPlayerSong={setPlayerSong} />
          )}
        />
        <Route
          path="/artist/:artistID"
          render={(routerProps) => (
            <ArtistPage {...routerProps} setPlayerSong={setPlayerSong} />
          )}
        />
        <Route
          path="/album/:albumID"
          render={(routerProps) => (
            <AlbumPage {...routerProps} setPlayerSong={setPlayerSong} />
          )}
        />
        <Player playerSong={playerSong} />
      </div>
    </Router>
  )
}

export default App
