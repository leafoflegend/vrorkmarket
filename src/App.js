import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TestVR from './components/testVR';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div
          className="App"
          style={{
            width: '100%',
            height: '1200px',
          }}
        >
          <TestVR />
        </div>
      </Provider>
    );
  }
}

export default App;
