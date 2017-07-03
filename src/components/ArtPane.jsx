import React from 'react';

class ArtPane extends React.Component {
  constructor(props){
    super(props)

    this.state = { visible: false}
  }

  render() {

    return (
      <div className="content-pane">
        <div className="art-content-container">
          <h1> Art Content</h1>
          <div className="slideshow-container">
          </div>
        </div>
      </div>
    )
  }
}

export default ArtPane;
