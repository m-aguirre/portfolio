import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ProjectList from './ProjectList.jsx';
import ProjectsPane from './ProjectsPane.jsx';
import ArtPane from './ArtPane.jsx';
import BioPane from './BioPane.jsx';
import Buzz from './projects/Buzz.jsx';
import Face2Face from './projects/Face2Face.jsx';
import Tripmates from './projects/Tripmates.jsx';


class SideBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {ProjectListVisible: false,
                  ProjectPaneVisible: false,
                  ArtPaneVisible: false,
                  BioPaneVisible: false,
                  BuzzVisible: false,
                  Face2FaceVisible: false,
                  TripmatesVisible: false
                  }

    this.handleProjectListClick = this.handleProjectListClick.bind(this);
    this.handleProjectListItemClick = this.handleProjectListItemClick.bind(this);
    this.handleArtClick = this.handleArtClick.bind(this);
    this.handleBioClick = this.handleBioClick.bind(this);
    
  }

  handleProjectListClick() {
    if(this.state.BioPaneVisible || this.state.ArtPaneVisible) {
      setTimeout(() => {
        this.setState({ProjectListVisible: ! this.state.ProjectListVisible,
                       ProjectPaneVisible: ! this.state.ProjectPaneVisible})
      }, 700);
    } else {
      this.setState({ProjectListVisible: ! this.state.ProjectListVisible,
                     ProjectPaneVisible: ! this.state.ProjectPaneVisible});
    }
    this.setState({ ArtPaneVisible: false,
                    BioPaneVisible: false});
  }

  handleProjectListItemClick() {
    this.setState({Face2FaceVisible: ! this.state.Face2FaceVisible});
  }

  handleArtClick() {
    if(this.state.BioPaneVisible || this.state.ProjectListVisible) {
      setTimeout(() => {
        this.setState({ArtPaneVisible: ! this.state.ArtPaneVisible})
      }, 700);
    } else {
      this.setState({ArtPaneVisible: ! this.state.ArtPaneVisible});
    }
    this.setState({ ProjectListVisible: false,
                    ProjectPaneVisible: false,
                    BioPaneVisible: false});
  }

  handleBioClick() {
    if(this.state.ArtPaneVisible || this.state.ProjectListVisible) {
      setTimeout(() => {
        this.setState({BioPaneVisible: ! this.state.BioPaneVisible})
      }, 700);
    } else {
      this.setState({BioPaneVisible: ! this.state.BioPaneVisible});
    }
    this.setState({ ProjectListVisible: false,
                    ProjectPaneVisible: false,
                    ArtPaneVisible: false});
  }

  render() {
    return (
      <div className="side-bar">
        <div>
          <h2 className="side-bar-item" onClick={this.handleProjectListClick}>Projects</h2>
          <CSSTransitionGroup transitionName="project-transition">
            { this.state.ProjectListVisible ?  <ProjectList handleClick={this.handleProjectListClick}
                                                            handleItemClick={this.handleProjectListItemClick}/> : null }
          </CSSTransitionGroup>
          <h2 className="side-bar-item" onClick={this.handleArtClick}>Art</h2>
          <h2 className="side-bar-item" onClick={this.handleBioClick}>Bio</h2>
        </div>
        <CSSTransitionGroup transitionName="content-transition">
          { this.state.ProjectPaneVisible ? <ProjectsPane /> : null }
          { this.state.Face2FaceVisible ? <Face2Face /> : null }
          { this.state.ArtPaneVisible ?  <ArtPane /> : null }
          { this.state.BioPaneVisible ? <BioPane /> : null }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default SideBar;
