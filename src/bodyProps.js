import React, { Component } from "react";

export class bodyProps extends Component {
  render() {
    return (
      <div>
        <h4> {this.props.title}</h4>
        <h5>{this.props.contentBody}</h5>
      </div>
    );
  }
}

export default bodyProps;
