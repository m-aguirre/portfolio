import React from 'react';

class TripMates extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="project-content-pane">
        <div className="project-content-container">
          <h1>Tripmates</h1>
          <p>Tripmates is a social app that allows users to create and plan future trips
          and invite their friends to join.  Users can create their trips and select dates
          and potential activities to do at their destination, as well as the estimated costs for
          anything involved in the trip. </p>
          <p>Tripmates was built with friends in React, Node/Express, and MySQL.  It includes the
          Yelp API for easily finding activities, and the Facebook API for optional FB authentication.</p>

        <div className="tripmates-image" id="tm-home1"></div>
          <p>Home page with login/logout, trip creation button, and list of popular destinations</p>
          <div className="tripmates-image" id="tm-trip1"></div>
          <p>Trip planning page</p>
          <div className="tripmates-image" id="tm-trip-invite"></div>
          <p>Once a trip's details have been filled in, users can invite their friends to join on their trip</p>
        </div>
      </div>
    )
  }
}

export default TripMates;
