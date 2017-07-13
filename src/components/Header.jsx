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
            <li id="linkedin-link"><a href="https://www.linkedin.com/in/matthew-aguirre/"></a></li>
            <li id="github-link"><a href="https://github.com/m-aguirre"></a></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Header;
