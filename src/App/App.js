import React from 'react';
import './App.css';
import Clock from '../Components/Clock/Clock';
import TaskElement from '../Components/Common/TaskElement/TaskElement'
import * as Tasks from '../Components/Tasks/Tasks';



class App extends React.Component {

  render () {
    return (
      <div className="myComponents">
          <Clock/>
        <div className="tasks">
          <TaskElement taskFunction={Tasks.reverseNumber} taskName="Reverse number" />
          <TaskElement taskFunction={Tasks.stringCombinations} taskName="String combinations" />
          <TaskElement taskFunction={Tasks.secondGreatestAndLowest} taskName="Second greatest and lowest" />
          <TaskElement taskFunction={Tasks.findTheFirstUniqueCharacter} taskName="First not repeated character" />
        </div>
      </div>
    );
  }
}

export default App;