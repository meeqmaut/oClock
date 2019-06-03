import React from 'react';
import './App.css';
import Clock from '../Components/Clock/Clock';
import TaskElement from '../Components/Common/TaskElement/TaskElement'
import * as Tasks from '../Components/Tasks/Tasks';
import Game from '../Components/TicTac/Game';
import configureStore from '../Store/configureStore';
import { Provider } from 'react-redux';

class App extends React.Component {

  componentDidCatch(err, info) {
    alert(err, '___', info);
  }

  render () {

    const Fragment = React.Fragment;
    const store = configureStore();
console.log(store)
    return (
      <Fragment>
        <Provider store={store}>
          <Clock/>
        </Provider>
        <div className="tasks">
          <TaskElement taskFunction={Tasks.reverseNumber} taskName="Reverse number"><p></p><span></span></TaskElement>
          <TaskElement taskFunction={Tasks.stringCombinations} taskName="String combinations" />
          <TaskElement taskFunction={Tasks.secondGreatestAndLowest} taskName="Second greatest and lowest" />
          <TaskElement taskFunction={Tasks.findTheFirstUniqueCharacter} taskName="First not repeated character" />
        </div>
        <Game />
      </Fragment>
    );
  }
}

export default App;