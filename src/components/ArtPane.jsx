import React from 'react';

class ArtPane extends React.Component {
  constructor(props){
    super(props)

    this.state = { visible: false}

  }

  render() {
    return (
      <div className="content-pane">
        <h1> Art Content</h1>
      </div>
    )
  }
}

export default ArtPane;
