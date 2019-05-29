/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Drinks from './src/screens/Drinks//index';
import configureStore from './src/store/configureStore';

let store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <Drinks />
  </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);
