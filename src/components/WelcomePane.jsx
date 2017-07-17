import React from 'react';

class WelcomePane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (
      <div className="welcome-pane">
        <h1>Engineer - Scientist - Artist</h1>
        <p>Hello and welcome! I am a full stack software engineer located in
        San Francisco.  My educational background is full of an assortment of
        math and science classes and I love taking on tough technical challenges.
        I enjoy taking a user-centric approach to developing intuitive and good looking
        applications, as well as exploring new technologies that make my apps
        more powerful and feature-rich.</p>
      <p>Feel free to contact me with questions <a href="mailto:matthew.p.aguirre@gmail.com">matthew.p.aguirre@gmail.com</a> </p>
      </div>
    )
  }
}

export default WelcomePane;
