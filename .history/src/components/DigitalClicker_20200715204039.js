// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
    constructor(){
    super()
    this.state = { 
        timesClicked: 0}
    
    }

    handleClick = () => {
        this.setState(previousState => {
          return {
            count: previousState.count + 1
          }
        })
      }


render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}export default DigitalClicker