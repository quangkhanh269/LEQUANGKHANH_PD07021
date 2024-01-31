import * as React from 'react';

import { Button, View } from "react-native";
import  {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomSreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <Button
              onPress={() => navigation.navigate('Notifications')}
              title="Go to notifications"
              />
        </View>
    );
}


function NotificationsScreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button 
              onPress={() => navigation.goBack()} 
              title="Go back Home Screen" 
              />  
        </View>
    );
}


const Drawer = createDrawerNavigator();
const Lab6 = ()=>{
    return(
        <NavigationContainer>
           <Drawer.Navigator initialRouteName='Home'>
             <Drawer.Screen name="Home" component={HomSreen}/>
             <Drawer.Screen name="Notifications" component={NotificationsScreen} />
           </Drawer.Navigator>
        </NavigationContainer>
    );

};
export default Lab6;
