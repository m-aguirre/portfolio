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
            <li>github</li>
            <li>linkedin</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Header;
