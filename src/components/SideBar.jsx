import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ProjectList from './ProjectList.jsx';
import ProjectsPane from './ProjectsPane.jsx';
import ArtPane from './ArtPane.jsx';
import BioPane from './BioPane.jsx';

class SideBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {ProjectListVisible: false,
                  ArtPaneVisible: false,
                  BioPaneVisible: false
                  }

    this.handleProjectListClick = this.handleProjectListClick.bind(this);
    this.handleArtClick = this.handleArtClick.bind(this);
    this.handleBioClick = this.handleBioClick.bind(this);
  }

  handleProjectListClick() {
    this.setState({ ProjectListVisible: ! this.state.ProjectListVisible,
                    ArtPaneVisible: false,
                    BioPaneVisible: false});
  }

  handleArtClick() {
      this.setState({ ProjectListVisible: false,
                      ArtPaneVisible: ! this.state.ArtPaneVisible,
                      BioPaneVisible: false});
  }

  handleBioClick() {
    this.setState({ ProjectListVisible: false ,
                    ArtPaneVisible: false,
                    BioPaneVisible: ! this.state.BioPaneVisible});
  }

  render() {
    return (
      <div className="side-bar">
        <div>
          <h2 className="side-bar-item" onClick={this.handleProjectListClick}>Projects</h2>
          <CSSTransitionGroup transitionName="project-transition">
            { this.state.ProjectListVisible ?  <ProjectList handleClick={this.handleProjectListClick}/> : null }
          </CSSTransitionGroup>
          <h2 className="side-bar-item" onClick={this.handleArtClick}>Art</h2>
          <h2 className="side-bar-item" onClick={this.handleBioClick}>Bio</h2>
        </div>
        <CSSTransitionGroup transitionName="content-transition">
          { this.state.ProjectListVisible ? <ProjectsPane /> : null }
          { this.state.ArtPaneVisible ?  <ArtPane /> : null }
          { this.state.BioPaneVisible ? <BioPane /> : null }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default SideBar;
