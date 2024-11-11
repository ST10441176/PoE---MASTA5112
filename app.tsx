import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './signin';
import SignUpScreen from './signup';
import HomeScreen from './home';

const Stack = createStackNavigator();

const screenData = [
  { name: 'SignIn', component: SignInScreen },
  { name: 'SignUp', component: SignUpScreen },
  { name: 'Home', component: HomeScreen },
];

const LogoHeader = () => (
  <View style={styles.logoContainer}>
    <Image
      source={require('./img/Chef.jpg')}
      style={styles.logo}
    />
  </View>
);

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      {screenData.map(({ name, component }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerTitle: () => <LogoHeader />,
          }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;