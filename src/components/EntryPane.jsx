import React from 'react';

//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
const CSSTransitionGroup = React.addons.CSSTransitionGroup;
const TransitionGroup = React.addons.TransitionGroup;

class EntryPane extends React.Component {
  constructor(props){
    super(props)

    this.state = { hidden: false }

    this.revealMainPage = this.revealMainPage.bind(this);
  }

  revealMainPage() {
    this.setState({hidden: true})
  }
  render() {
    return (
      <div>
        <div>
          <h1>Big Quote</h1>
          <h3>name</h3>
        </div>
        <div>
          <button>Enter</button>
        </div>
      </div>
    )
  }
}

export default EntryPane;
