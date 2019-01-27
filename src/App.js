import React, { Component } from 'react';
import Sample from './Components/Sample';
import {Provider} from 'mobx-react';
import TerminalStore from './Store/TerminalStore';
import MainScreen from './Components/MainScreen';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        Hello World
        <Provider terminalStore={TerminalStore}>
          <MainScreen />
        </Provider>
      </div>
    );
  }
}

export default App;
