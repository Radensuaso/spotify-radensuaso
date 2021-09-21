import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavSpotify from "./components/NavSpotify";
import Player from "./components/Player";
import HomeSpotify from "./components/HomeSpotify";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import SearchPage from "./components/SearchPage";
import Library from "./components/Library";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavSpotify />
        <Route path="/" exact component={HomeSpotify} />
        <Route path="/search" component={SearchPage} />
        <Route path="/library" component={Library} />
        <Route path="/artist/:artistID" component={ArtistPage} />
        <Route path="/album/:albumID" component={AlbumPage} />
        <Player />
      </div>
    </Router>
  );
};

export default App;
