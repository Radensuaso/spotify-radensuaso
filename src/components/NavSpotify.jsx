import { withRouter, Link } from "react-router-dom"
import spotifyLogo from "../src-assets/spotify-logo.png"
import { HiHome } from "react-icons/hi"
import { BsSearch } from "react-icons/bs"
import { ImBooks } from "react-icons/im"
import Button from "react-bootstrap/Button"

const NavSpotify = (props) => {
  return (
    <nav
      id="nav-spotify"
      className="d-flex flex-column justify-content-between"
    >
      <div>
        <div className="mx-3 my-4">
          <img src={spotifyLogo} alt="spotify logo" />
        </div>
        <Link
          to="/"
          className={
            props.location.pathname === "/" ? "text-light" : "text-muted"
          }
        >
          <div className="nav-spotify-link mx-3 mb-3 d-flex align-items-center">
            <span className="menu-icon mr-3 d-flex align-items-center">
              <HiHome />
            </span>
            <strong className="menu-description">Home</strong>
          </div>
        </Link>
        <Link
          to="/search"
          className={
            props.location.pathname === "/search" ? "text-light" : "text-muted"
          }
        >
          <div className="nav-spotify-link mx-3 mb-3 d-flex align-items-center">
            <span className="menu-icon mr-3 d-flex align-items-center">
              <BsSearch />
            </span>
            <strong className="menu-description">Search</strong>
          </div>
        </Link>
        <Link
          to="/library"
          className={
            props.location.pathname === "/library" ? "text-light" : "text-muted"
          }
        >
          <div className="nav-spotify-link mx-3 mb-3 d-flex align-items-center">
            <span className="menu-icon mr-3 d-flex align-items-center">
              <ImBooks />
            </span>
            <strong className="menu-description">Your Library</strong>
          </div>
        </Link>
      </div>
      <div className="nav-spotify-bottom text-center">
        <Button className="nav-button mb-3" variant="outline-light">
          SIGN UP
        </Button>
        <Button className="nav-button mb-3" variant="outline-light">
          Login
        </Button>
        <div>
          <p>Cookie | Privacy</p>
          <p>Policy</p>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(NavSpotify)
