import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text, Linking} from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
    const BASE_PATH =
        'https://firebasestorage.googleapis.com/v0/b/heymyapp.appspot.com/o/';
    const proileImage = 'user-or.png?alt=media&token=f0890032-889c-42ca-8ed1-9443cad8f0f4';
    const star_filled = 'star_filled-or.png?alt=media&token=64dcbfb2-902e-46e8-aead-311913002fc9'

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FEF3B4"}}>
            <View style={styles.sideUserArea}>
                <Image
                    source={{uri: BASE_PATH + proileImage}}
                    style={styles.sideProfileIcon}
                />
                <Text style={styles.sideUserName}>Prof. Paulo Amaral</Text>
                <Text style={styles.sideUserEmail}>paulodoamaralcosta@hotmail.com</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Visite-nos"
                    onPress={() => Linking.openURL('https://pauloamaral.com.br/')}
                />
                <View style={styles.customItem}>
                    <Text
                        onPress={() => {
                            Linking.openURL('http://pauloamaral.com.br/');
                        }}>
                        Avalie-nos
                    </Text>
                    <Image
                        source={{uri: BASE_PATH + star_filled}}
                        style={styles.iconStyle}
                    />
                </View>
            </DrawerContentScrollView>
            <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 10}}>
                pauloamaral.com.br
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideUserArea: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderBottomColor: '#AD6200',
        borderBottomWidth: 1,
    },

    sideProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },

    sideUserName: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    sideUserEmail: {
        fontSize: 14,
        marginBottom: 10,
    },

    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;
