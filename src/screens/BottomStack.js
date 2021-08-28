import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import Product from "./Product";
import ProductList from "./ProductList";
import MaterialIcons from "@expo/vector-icons";
import Home from "./Home";

const Tab = createMaterialBottomTabNavigator();
export default function BottomStack({navigation, route}) {
    return (<Tab.Navigator initialRouteName="Home" activeColor="#FFFFFF" inactiveColor="#FFc300"
                           barStyle={{backgroundColor: '#E37D00'}}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" color={color} size={26}/>
        }}/>
        <Tab.Screen name="Product" component={Product} options={{
            tabBarLabel: 'Novo',
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="plus-box-outline" color={color} size={26}/>
        }}/>
        <Tab.Screen name="ProductList" component={ProductList} options={{
            tabBarLabel: 'Listar',
            tabBarIcon: ({color}) => <MaterialIcons name="list-all" color={color} size={26}/>
        }}/>
    </Tab.Navigator>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FC0'
    }
});