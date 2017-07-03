import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="header">
        <h2 className="name-h2">Matthew Aguirre</h2>
        <div className="portfolio-photo"></div>
        <div className="links-container"></div>
      </div>
    )
  }

}

export default Header;
