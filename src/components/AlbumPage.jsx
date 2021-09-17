import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import { usePalette } from "react-palette"
import AlbumJumbotron from "./AlbumJumbotron"
import Table from "react-bootstrap/Table"
import { AiOutlineClockCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

const AlbumPage = (props) => {
  const [album, setAlbum] = useState({
    data: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"

    const albumID = props.match.params.albumID
    fetchGet(albumUrl, setAlbum, albumID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [album.loading])

  /* get dominant color */
  const { data } = usePalette(album.data && album.data.cover_big)

  return (
    <>
      <AlbumJumbotron album={album} dominantColor={data.vibrant} />
      <Container
        fluid
        id="album-container"
        style={{
          background: `linear-gradient(
              180deg,
              ${data.vibrant},
              rgba(18, 18, 18, 1) 20%
            )`,
        }}
      >
        <Table responsive>
          <thead className="table-head">
            <tr>
              <th className="d-flex">
                <div className="mr-3">#</div>
                <div>TITLE</div>
              </th>
              <th>
                <AiOutlineClockCircle />
              </th>
            </tr>
          </thead>
          <tbody>
            {album.data &&
              album.data.tracks.data.map((track, i) => (
                <tr className="song-table-row" key={i}>
                  <td className="d-flex">
                    <div className="d-flex justify-content-center align-items-center mr-3">
                      {i + 1}
                    </div>
                    <div>
                      <span className="song-title">{track.title}</span> <br />
                      <span>
                        <Link
                          style={{ color: "#b3b3b3" }}
                          to={`/artist/${track.artist.id}`}
                        >
                          {track.artist.name}
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td>{`${Math.floor(track.duration / 60)}:${(
                    track.duration -
                    Math.floor(track.duration / 60) * 60 +
                    "0"
                  ).substring(0, 2)}`}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default AlbumPage
