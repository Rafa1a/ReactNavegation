/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navegacao from './src/routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navegacao);
