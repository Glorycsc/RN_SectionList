/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Tree from './Tree';
import FinalTree from './FinalTree';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FinalTree);
