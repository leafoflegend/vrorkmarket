import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import Container from './components';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <MuiThemeProvider>
            <Container />
          </MuiThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
