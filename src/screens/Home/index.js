import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

export default function Home({route}) {
    return (
        <View style={styles.container}>
            <Text>Tela Home {route.params?.email}</Text>
            <Text>Olá {route.params?.name}, seja bem-vindo!</Text>
        </View>
    );
}
