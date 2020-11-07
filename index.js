/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FirstScreen from './FirstScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FirstScreen);
