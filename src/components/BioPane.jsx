import React from 'react';

class BioPane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="content-pane">
        <div className="project-content-container" id="bio-container">
          <h2>Bio</h2>
            <p>I was born in San Francisco and lived in the Bay Area until I joined the United States Air Force
          at the age of 19.  My service took me across the country for training prior to being stationed in Germany for four years.
          During that time, I worked closely with US Army personnel as a Joint Terminal Attack Controller and was deployed to Iraq and Afghanistan,
           as well as being sent to numerous countries to perform training missions with US allies.  Upon the completion of my enlistment,
            I spent several months traveling before returning to the Bay Area to begin college.     </p>
            <p> I completed a wide range of math and science classes before ultimately choosing to major in Data Science at The University of San Francisco.
                My recent professional achievements include performing chemical engineering research at the Tullman-Ercek laboratory at UC Berkeley,
               as well as performing a multitude of tasks while interning and two early-stage startups.
               I am a firm believer that small, dedicated teams can change the world, and this belief is what continues to draw me back to the startup world.
            </p>
            <p>
            I believe in working hard and always performing to the best of one’s abilities.  My commitment to excellence has been acknowledged many times,
             and my list of awards includes: Pi Mu Epsilon National Mathematics Honor Society Induction, USF Dean’s Honor List, Squadron Airman of the Year and Airman of the Quarter,
              USAF Combat Action Medal, US Army Commendation Medal, US Army Achievement Medal, USAF Achievement Medal


            </p>
        </div>
      </div>
    )
  }
}

export default BioPane;
