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
        <div className="project-description">
          <p>Face2Face can be simply described as a video chat version of Tinder.
          Users are paired with each other for video chat based on matching criteria such as gender and age.
          After chatting, users are given the chance to like or reject whomever they just talked to.
          If a mutual like occurs, they are able to continue chatting via text in the app.</p>
        <p>Face2Face was written with love in React, Node, and Postgresql with video chat powered by a Twilio API and Socket.io for text chat. </p>
        </div>
        <div>
          <div className="project-image" id="f2f-homescreen"></div>
          <p>Home Screen, "Connection" button queues users for video chat assignment</p>
          <div className="project-image" id="f2f-video-chat"></div>
          <p>Video Chat</p>
          <div className="project-image" id="f2f-matchlist"></div>
          <p>Match List, users are able to open chats and view their matches profiles</p>
          <div className="project-image" id="f2f-messages"></div>
          <p>Text Chat, users can talk privately over text in real time and view chat history</p>
        </div>
      </div>
    )
  }
}

export default Face2Face;
