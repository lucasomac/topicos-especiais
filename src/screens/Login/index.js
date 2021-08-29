import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Separator from '../../components/Separator';
import styles from "./styles";
import * as registredState from "react-native";
import {useEffect, useState} from "react";

export default function Login({navigation, route}) {
    const [registeredState, setRegisteredState] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [haveAccount, setHaveAccount] = React.useState(false);

    async function getUserData() {
        let userData = await SecureStore.getItemAsync('userData');
        if (userData) {
            setEmail(JSON.parse(userData).email);
            setRegisteredState({...JSON.parse(userData)});
            setHaveAccount(true);
        } else {
            setHaveAccount(false);
        }
    }

    async function handleDelete() {
        await SecureStore.deleteItemAsync(('userData'));
    }

    useEffect(() => {
        getUserData();
        const unsubscribe = navigation.addListener('focus', () => {
            getUserData();
        });
        return () => {
            unsubscribe;
        };
    }, [navigation]);

    function handleLogin() {
        if (email.length !== 0 && password.length !== 0) {
            if (email === registeredState.email && password === registeredState.password) {
                setPassword('');
                global.nameLogin = registeredState.name;
                navigation.replace('BottomStack');
            } else {
                Alert.alert(
                    'Erro ao tentar efetuar o login:',
                    'Informe o e-mail e a senha corretos'
                );
            }
        } else {
            Alert.alert(
                'Erro ao tentar efetuar o login:',
                'Informe o e-mail e a senha corretos!'
            );
        }
    }

    function handleRegister() {
        setEmail('');
        setPassword('');
        navigation.navigate('Register');
    }

    function handleDeleteRegister() {
        SecureStore.deleteItemAsync('userData');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Secure Store App</Text>
            <TextInput
                style={styles.input}
                defaultValue={email}
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder={'E-mail'}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Senha'}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <Separator marginVertical={10}/>
            {(!haveAccount) ?
                (<><Text style={styles.textSimple}>É a primeira vez aqui e ainda não se cadastrou?</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastre-se</Text>
                    </TouchableOpacity></>) :
                (<><Text style={styles.textSimple}>Já possuo uma conta, porém...</Text>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => Alert.alert('Informação:', `A sua senha foi enviada para o email cadastrado: ${registeredState.email} ${registeredState.password}`)}>
                        <Text style={styles.buttonText}>Esqueci minha senha</Text>
                    </TouchableOpacity></>)}
            <Separator marginVertical={30}/>
            <Text style={styles.textSimpleJustify}>Este aplicativo faz uso de armazenamento local com SecureStore e
                AsyncStorage</Text>
            <TouchableOpacity style={styles.button} onPress={handleDeleteRegister}>
                <Text>Deletar Contaa</Text>
            </TouchableOpacity>
        </View>
    );
}
