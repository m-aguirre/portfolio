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
    this.handleTripmatesClick = this.handleTripmatesClick.bind(this);
    this.handleBuzzClick = this.handleBuzzClick.bind(this);
    this.handleArtClick = this.handleArtClick.bind(this);
    this.handleBioClick = this.handleBioClick.bind(this);
    this.clearProjects = this.clearProjects.bind(this);

  }

  handleProjectListClick() {
    this.clearProjects();
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
    if(this.state.TripmatesVisible || this.state.BuzzVisible) {
      this.clearProjects();
      setTimeout(() => {
        this.setState({Face2FaceVisible: ! this.state.Face2FaceVisible});
      }, 700);
    } else {
      this.setState({Face2FaceVisible: ! this.state.Face2FaceVisible});
    }
  }

  handleTripmatesClick() {
    if(this.state.Face2FaceVisible || this.state.BuzzVisible) {
      this.clearProjects();
      setTimeout(() => {
        this.setState({TripmatesVisible: ! this.state.TripmatesVisible});
      }, 700);
    } else {
      this.setState({TripmatesVisible: ! this.state.TripmatesVisible});
    }
  }

  handleBuzzClick() {
    if(this.state.Face2FaceVisible || this.state.TripmatesVisible) {
      this.clearProjects();
      setTimeout(() => {
        this.setState({BuzzVisible: ! this.state.BuzzVisible});
      }, 700);
    } else {
      this.setState({BuzzVisible: ! this.state.BuzzVisible});
    }
  }

  clearProjects() {
    this.setState({Face2FaceVisible: false,
                   BuzzVisible: false,
                   TripmatesVisible: false})
  }

  handleArtClick() {
   this.clearProjects();
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
    this.clearProjects();
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
                                                            handleItemClick={this.handleProjectListItemClick}
                                                            handleTripmatesClick={this.handleTripmatesClick}
                                                            handleBuzzClick={this.handleBuzzClick} /> : null }
          </CSSTransitionGroup>
          <h2 className="side-bar-item" onClick={this.handleArtClick}>Art</h2>
          <h2 className="side-bar-item" onClick={this.handleBioClick}>Bio</h2>
        </div>
        <CSSTransitionGroup transitionName="content-transition">
          { this.state.ProjectPaneVisible ? <ProjectsPane /> : null }
          { this.state.Face2FaceVisible ? <Face2Face /> : null }
          { this.state.BuzzVisible ? <Buzz /> : null }
          { this.state.TripmatesVisible ? <Tripmates /> : null }
          { this.state.ArtPaneVisible ?  <ArtPane /> : null }
          { this.state.BioPaneVisible ? <BioPane /> : null }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default SideBar;
