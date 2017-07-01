import React from 'react';

class Pane extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }


  render(){
    return (
      <div className='sliding-pane'>
        <h1>Big Quote</h1>
        <div className="enter-button" onClick={this.props.handleClick}>Enter</div>

      </div>
    )
  }
}

export default Pane;
