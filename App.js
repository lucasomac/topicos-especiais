import * as React from 'react';
import {Button, Alert, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import BottomStack from './src/screens/BottomStack';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Stack = createStackNavigator();

;

function getHeaderTitle(route) {
    const routName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routName) {
        case 'Home':
            return 'Home';
        case 'Product':
            return 'Produto'
        case 'ProductList':
            return 'Produtos Cadastrados';
    }
}

export default function App() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#FEF3B4'}}>
            <StatusBar style="auto" backgroundColor="#AD6200"/>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerStyle: {backgroundColor: '#E37D00'}, // Header color
                        headerTintColor: '#FFFFFF', // Header text color
                    }}>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            title: 'Login',
                            headerTitleStyle: {fontWeight: 'bold', textAlign: 'center'},
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{title: 'Cadastre-se'}}
                    />
                    <Stack.Screen
                        name="BottomStack"
                        component={BottomStack}
                        options={({navigation, route}) => ({
                            headerTitle: getHeaderTitle(route),
                            headerRight: () => (
                                <Button
                                    onPress={() => {
                                        Alert.alert(
                                            'Atenção!',
                                            'Deseja sair do aplicativo?',
                                            [
                                                {
                                                    text: 'Sim',
                                                    onPress: () => navigation.replace('Login'),
                                                },
                                                {
                                                    text: 'Não',
                                                    onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                            ],
                                            {cancelable: false}
                                        );
                                    }}
                                    style={{padding: 10}}>
                                    <MaterialCommunityIcons name="exit-run" color="FFF" size={26}
                            ),
                            headerTitleStyle: {fontWeight: 'bold', textAlign: 'center'},
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}