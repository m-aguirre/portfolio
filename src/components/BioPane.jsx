import React from 'react';

class BioPane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="content-pane">
        <div className="bioContainer">
          <h2>Bio</h2>
          <p> Here is some info about me</p>
          <p> and more info ...</p>
        </div>
      </div>
    )
  }
}

export default BioPane;
