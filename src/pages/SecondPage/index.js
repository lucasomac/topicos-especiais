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
                    This is Second Page under Second Page Option
                </Text>
                <Button
                    title="Go to First Page"
                    onPress={() => navigation.navigate('FirstPage')}
                />
                <Button
                    title="Go to Third Page"
                    onPress={() => navigation.navigate('ThirdPage')}
                />
            </View>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
                Custom React Navigate Drawer
            </Text>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
                www.aboutreact.com
            </Text>
        </View>
    );
};
