// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
    constructor(){
    super();
    this.state = { 
        timesClicked: 0, };
    
    }

    handleClick = () => {
        this.setState(previousState => ({
          numClicked: previousState.numClicked + 1
          }))
      }


render() {
    return (
      <div>
        <button onClick={this.handleClick}>Digital Clicker!</button>
      </div>
    );
  }
}export default DigitalClicker