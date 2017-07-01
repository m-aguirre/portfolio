import React from 'react';

class Pane extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return (
      <div className='panel'>
        <h1>Big Quote</h1>
      </div>
    )
  }
}

export default Pane;
