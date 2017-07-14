import React from 'react';

class ProjectsPane extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="projects-content-pane">
        <div className="project-content-container">
          <h1>Projects</h1>
          <p>In this section you will find a selection of the projects I have
            recently worked on. </p>
        </div>
      </div>
    )
  }
}

export default ProjectsPane;
