import React from 'react';

class ArtPane extends React.Component {
  constructor(props){
    super(props)

    this.state = { visible: false}
  }

  render() {

    return (
      <div className="content-pane">
        <div className="project-content-container">
          <h1> Art </h1>
          <p>My visual art is mostly in oil paint and graphite. Here is a small selection
          of work I've done in various styes over that last couple years</p>
          <p>More work to be added soon!</p>
          <div className="slideshow-container"></div>
        </div>
      </div>
    )
  }
}

export default ArtPane;
