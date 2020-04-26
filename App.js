import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';

import store from './src/Component/redux/store';
import HomeScreen from './src/Component/screen/Home/Home';
import Indonesia from './src/Component/screen/Indonesia/Indonesia'
import about from './src/Component/screen/about/about'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          color={tintColor}
          style={{ fontSize: 25 }}></Icon>
      ),
    },
  },
  Indonesia: {
    screen: Indonesia,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="book"
          color={tintColor}
          style={{ fontSize: 25 }}></Icon>
      ),
    },
  },
  About: {
    screen: about,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="information"
          color={tintColor}
          style={{ fontSize: 25 }}></Icon>
      ),
    },
  },
});

const homeNavigator = createStackNavigator({
  Home: {
    screen: tabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  Info: {
    screen: Indonesia,
    navigationOptions: {
      headerShown: false,
    },
  },
  About: {
    screen: about,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const AppNavigator = createSwitchNavigator({
  Home: homeNavigator,
});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
