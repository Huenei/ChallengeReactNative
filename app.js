import React, {Component} from 'react';
import Drinks from './src/screens/drinks/index';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

let store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Drinks />
      </Provider>
    );
  }
}