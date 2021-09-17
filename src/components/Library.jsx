import Container from "react-bootstrap/Container";
import SongRowEntire from "./SongRowEntire";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  libraryList: state.library.libraryList,
});

const SearchPage = ({ libraryList }) => {
  return (
    <Container fluid id="library-container">
      <SongRowEntire title={"Library"} songs={libraryList} />
    </Container>
  );
};

export default connect(mapStateToProps)(SearchPage);
