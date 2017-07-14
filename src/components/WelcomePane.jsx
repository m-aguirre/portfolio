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
        applications that satisfy my inner artist.</p>
      <p>Feel free to contact me with questions, and note that I am currently available
      for select freelance projects <a href="mailto:matthew.p.aguirre@gmail.com">matthew.p.aguirre@gmail.com</a> </p>
      </div>
    )
  }
}

export default WelcomePane;
