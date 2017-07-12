import React from 'react';

class Face2Face extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="project-content-pane">
        <h1>Face2Face</h1>
        <p>About Face2Face...</p>
        <div>
          <div className="project-image" id="f2f-homescreen"></div>
          <div className="project-image" id="f2f-matchlist"></div>
          <div className="project-image" id="f2f-messages"></div>
        </div>
      </div>
    )
  }
}

export default Face2Face;
