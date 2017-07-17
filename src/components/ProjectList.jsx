import React from 'react';

class ProjectList extends React.Component {
  constructor(props){
    super(props)

    this.state = {visible: false}

  }

  render() {
    return (
      <div className="project-list">
        <h3 className="side-bar-item" onClick={this.props.handleItemClick}>Face2Face</h3>
        <hr className="rule" />
        <h3 className="side-bar-item" onClick={this.props.handleTripmatesClick}>TripMates</h3>
        <hr className="rule" />
        <h3 className="project-item" onClick={this.props.handleBuzzClick}>Buzz</h3>
      </div>
    )
  }
}

export default ProjectList;
