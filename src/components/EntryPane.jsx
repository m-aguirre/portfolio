import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Pane from './Pane.jsx';

class EntryPane extends React.Component {
  constructor(props) {
       super(props);
       this.state = { visible: true };
       this.handleClick = this.handleClick.bind(this)
   }

   handleClick() {
     this.setState({ visible: ! this.state.visible });
   }

   render() {
       return <div>
           <CSSTransitionGroup transitionName="entry-pane">
             { this.state.visible ?  <Pane handleClick={this.handleClick}/> : null }
           </CSSTransitionGroup>
       </div>
   }
}



export default EntryPane;
