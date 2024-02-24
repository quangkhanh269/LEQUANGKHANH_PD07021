import React from 'react';
// import Lab3 from './src/screens/lab3'
// import Splash from './src/screens/auth/Splash';
// import Login from './src/screens/auth/Login';
// import SigUp from './src/screens/auth/SingUp';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Lab4 from './src/screens/auth/lab4';
// import Lab5 from './src/screens/Lab5';
// import Lab5_3 from './src/screens/Lab5_3';
// import Lab6 from './src/screens/lab6';
// import Lab7 from './src/screens/Lab7_1';
// import TopTab from './src/screens/Lab7_1/topMenu';
// import Crud from './src/screens/Lab8/Crud';
import Home from './src/screens/auth/Home';

const Stack = createNativeStackNavigator()
const App = () => {
  return (
  // <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen name='Home' component={Splash}/>
  //     <Stack.Screen name='Signup' component={SigUp}/>
  //     <Stack.Screen name='Login' component={Login}/>
  //   </Stack.Navigator>
  //   </NavigationContainer>
  // <Lab3></Lab3>
  // <Lab4></Lab4>
  // <Lab5></Lab5>
  // <Lab5_3></Lab5_3>
  // <Lab6></Lab6>
  // <Lab7></Lab7>
  //  <TopTab/>

  //<Crud></Crud>
  <Home></Home>
  );
  
};

export default App;
