import React from 'react';

class Pane extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }


  render(){
    return (
      <div className="sliding-pane">
        <h1 className="big-quote">I am always doing that which I can not do, in order that I may learn how to do it.</h1>
        <h2 className="name">-Pablo Picasso</h2>
        <div className="enter-button" onClick={this.props.handleClick}>Enter</div>

      </div>
    )
  }
}

export default Pane;
