import React from 'react';

class Pane extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }


  render(){
    return (
      <div className="sliding-pane">
        <h1 className="big-quote">Big Quote</h1>
        <h2 className="name">Name</h2>
        <div className="enter-button" onClick={this.props.handleClick}>Enter</div>

      </div>
    )
  }
}

export default Pane;
