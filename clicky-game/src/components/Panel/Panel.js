import React, { Component } from "react";
import "./Panel.css";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {beenClicked: this.props.beenClicked};
  }
  render() {
    console.log(this.state.beenClicked);
    return (
      <div onClick={() => (
        this.props.whenClicked(this.props.id, this.state.beenClicked),
        this.setState({ beenClicked: true})
        )} className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <strong>Beenclicked:</strong> {this.state.beenClicked}
        </div>
      </div>
    );
  }
}
export default Panel;
