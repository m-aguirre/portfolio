import React from 'react';

class WelcomePane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (
      <div className="welcome-pane">
        <h1>Welcome!</h1>
        <p>Here is a little blurb about me</p>
      </div>
    )
  }
}

export default WelcomePane;
