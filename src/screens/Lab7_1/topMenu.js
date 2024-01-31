import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomScreen";
import User from "./UserScreen";

const Tab = createMaterialTopTabNavigator();

const TopTab = ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="User" component={User}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default TopTab;