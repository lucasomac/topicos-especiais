import * as React from 'react';
import {Button, View, Text} from 'react-native';

export default ({navigation}) => {
    return (
        <View style={{flex: 1, padding: 16, backgroundColor: "#FFC300"}}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginBottom: 16,
                    }}>
                    This is Third Page under Second Page Option
                </Text>
                <Button
                    onPress={() => navigation.navigate('FirstPage')}
                    title="Go to First Page"
                />
                <Button
                    onPress={() => navigation.navigate('SecondPage')}
                    title="Go to Second Page"
                />
            </View>
            <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
                Custom React Navigate Drawer
            </Text>
            <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
                www.aboutreact.com
            </Text>
        </View>
    );
};