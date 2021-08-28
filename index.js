import {registerRootComponent} from 'expo';
import {name as appName} from './app.json';
import {AppRegistry} from "react-native";
import App from "./App";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent(appName, () => App())
registerRootComponent(App);
