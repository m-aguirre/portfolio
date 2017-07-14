import React from 'react';

class BioPane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="content-pane">
        <div className="bioContainer">
          <h2>Bio</h2>
            <p>Matthew was born in San Francisco and lived in the Bay Area until he joined the United States Air Force
          at the age of 19.  His service took him across the country for training prior to being stationed in Germany for four years.
           During that time, he worked closely with US Army personnel as a Joint Terminal Attack Controller and was deployed to Iraq and Afghanistan,
            as well as being sent to numerous countries to perform training missions with US allies.  Upon the completion of his enlistment,
             Matthew spent several months traveling before returning to the Bay Area to begin college.   </p>
            <p> Matthew completed a wide range of math and science classes before ultimately choosing to major in Data Science at The University of San Francisco.
              His recent professional achievements include performing chemical engineering research at the Tullman-Ercek laboratory at UC Berkeley,
               as well as performing a multitude of tasks while interning and two early-stage startups.  He is a firm believer that small,
                dedicated teams can change the world, and this belief is what continues to draw him back to the startup world.
            </p>
            <p>
              Matthew believes in working hard and always performing to the best of one’s abilities.  His commitment to excellence has been acknowledged many times,
               and his list of awards includes: Pu Mu Epsilon National Mathematics Honor Society Induction, USF Dean’s Honor List,
                Squadron Airman of the Year and Airman of the Quarter, USAF Combat Action Medal, US Army Commendation Medal, US Army Achievement Medal, USAF Achievement Medal

            </p>
        </div>
      </div>
    )
  }
}

export default BioPane;
