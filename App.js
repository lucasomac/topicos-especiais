import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomStack from "./src/screens/BottomStack";


const Stack = createStackNavigator();

function getHeaderTitle() {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'Product':
            return 'Produto';
        case 'ProductList':
            return 'Produtos Cadastrados';
    }
}

export default function App() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'FEF3B4'}}>
            <StatusBar style="auto" backgroundColor="#AD6200"/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{
                    headerStyle: {backgroundColor: '#E37D00'},
                    headerTintColor: '#FFFFFF'
                }}>
                    <Stack.Screen name="Login" component={Login} options={{
                        title: "Login",
                        headerTitleStyle: {fontWeight: 'bold', textAlign: 'center'}
                    }}/>
                    <Stack.Screen name="Register" component={Register} options={{
                        title: "Cadastre-se"
                    }}/>
                    <Stack.Screen name="BottomStack"
                                  component={BottomStack}
                                  options={({navigation, route}) => ({
                                      headerTitle: getHeaderTitle(route),
                                      headerRight: () => (
                                          <Button onPress={() => {
                                              Alert.alert('Atenção', 'Deseja Sair do aplicativo?', [{
                                                  text: 'Sim',
                                                  onPress: () => navigation.replace('Login')
                                              }, {
                                                  text: 'Não',
                                                  onPress: () => console.log('Cancel Pressed'),
                                                  style: 'cancel',
                                              },], {cancelable: false});
                                          }}
                                                  title="Sair"
                                                  style={{padding: 80}}
                                                  color="#D26900"/>),
                                      headerTiteStyle: {fontWeight: 'bolda', textAlign: 'center'},
                                  })}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
