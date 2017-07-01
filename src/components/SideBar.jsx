import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ProjectList from './ProjectList.jsx';

class SideBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {ProjectListVisible: false}

    this.handleProjectListClick = this.handleProjectListClick.bind(this);
  }

  handleProjectListClick(){
    this.setState({ ProjectListVisible: ! this.state.ProjectListVisible });
  }

  render() {
    return (
      <div className="side-bar">
        <h2 className="side-bar-item" onClick={this.handleProjectListClick}>Projects</h2>
        <CSSTransitionGroup transitionName="project-transition">
          { this.state.ProjectListVisible ?  <ProjectList handleClick={this.handleProjectListClick}/> : null }
        </CSSTransitionGroup>
        <h2 className="side-bar-item">Art</h2>
        <h2 className="side-bar-item">Bio</h2>
      </div>
    )
  }
}

export default SideBar;
