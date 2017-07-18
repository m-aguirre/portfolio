import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="header">
        <h1 className="name-h2">Matthew Aguirre</h1>
        <div className="portfolio-photo"></div>
        <div className="links-container">
          <ul>
            <a href="https://www.linkedin.com/in/matthew-aguirre/"><li id="linkedin-link"></li></a>
            <a href="https://github.com/m-aguirre"><li id="github-link"></li></a>
          </ul>
        </div>
      </div>
    )
  }

}

export default Header;
