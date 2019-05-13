import React from 'react';
import './App.css';
import Clock from '../Components/Clock/Clock';
import ForTask from '../Components/Common/ForTask/ForTask'
import { reverseNumber, stringCombinations, secondGreatestAndLowest, findTheFirstUniqueCharacter } from '../Components/Tasks/Tasks';



class App extends React.Component {

  render () {
    return (
      <div className="myComponents">
        <div id="clock">
          <Clock/>
        </div>
        <div id="tasks">
          <ForTask taskFunction={reverseNumber} taskName="Reverse number" />
          <ForTask taskFunction={stringCombinations} taskName="String combinations" />
          <ForTask taskFunction={secondGreatestAndLowest} taskName="Second greatest and lowest" />
          <ForTask taskFunction={findTheFirstUniqueCharacter} taskName="First not repeated character" />
        </div>
      </div>
    );
  }
}

export default App;