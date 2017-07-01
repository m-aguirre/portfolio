import React from 'react';

class ProjectList extends React.Component {
  constructor(props){
    super(props)

    this.state = {visible: false}

  }

  render() {
    return (
      <div className="project-list">
        <h3 className="project-item">Face2Face</h3>
        <h3 className="project-item">TripMates</h3>
        <h3 className="project-item">Buzz</h3>
      </div>
    )
  }
}

export default ProjectList;
