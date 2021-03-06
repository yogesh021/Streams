import React from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchIndividualStream } from "../../actions";

class streamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchIndividualStream(this.props.match.params.id);
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{this.props.stream ? this.props.stream.title : null}</h1>
        <h3>{this.props.stream ? this.props.stream.description : null}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchIndividualStream,
})(streamShow);
