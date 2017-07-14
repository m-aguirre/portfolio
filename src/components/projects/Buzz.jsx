import React from 'react';

class Buzz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="project-content-pane">
        <div className="project-content-container">
          <h1>Buzz</h1>
          <p>Buzz is an app that allows users to find happy hours in select neighborhoods of San Francisco.
          Users are given the option to find happy hours in a specific area, or by our fun custom categories that
          fit whatever mood they're looking to capture - such as divey, bougie, sports bars, etc.</p>

        <p>Buzz was built responsibly with React, Node/Express, and Postgresql</p>

        <div className="project-image" id="buzz-home"></div>
        <p>Description</p>
        <div className="project-image" id="buzz-vibes"></div>
        <p>Description</p>
        <div className="project-image" id="buzz-happy-hours"></div>
        </div>
      </div>
    )
  }
}

export default Buzz;
