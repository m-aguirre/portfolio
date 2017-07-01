import React from 'react';

class SideBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="side-bar">
        <h2>Projects</h2>
        <h2>Art</h2>
        <h2>Bio</h2>
      </div>
    )
  }
}

export default SideBar;
