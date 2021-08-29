import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';

import Separator from '../../components/Separator';
import styles from "./styles";
import {useState} from "react";
import saveItem from "../../models/ProductModel";

export default function Register({navigate}) {
    const [state, setState] = useState({
        userName: '',
        userPhone: '',
        userEmail: '',
        userPassword: ''
    });
    const [userPasswordConfirm, setUserPasswordConfirm] = React.useState('');

    const setUserData = (userData) => {
        return SecureStore.setItemAsync('userData', JSON.stringify(userData));
    };

    function handleRegister() {
        if (!state.userName || !state.userPhone || !ustate.serEmail || !state.userPassword) {
            Alert.alert(
                'Erro ao tentar cadastrar usuário:',
                'Preencha todos os campos corretamente!'
            );
        } else {
            if (state.userPassword !== userPasswordConfirm) {
                Alert.alert('Erro ao tentar cadastrar usuário:', 'Senha não confere com a confirmação da senha!');
            } else {
                saveUserData({
                    name: state.userName,
                    phone: state.userPhone,
                    email: state.userEmail,
                    password: state.userPassword
                });
                navigate('Login', {email: state.userEmail});
            }
        }
    }

    const handleChangeText = (key, value) => {
        setState({...state, [key]: value});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Dados do Usuário</Text>
            <TextInput
                style={styles.input}
                value={state.userName}
                onChangeText={(value) => handleChangeText('username', value)}
                placeholder={'Nome'}
            />
            <TextInput
                style={styles.input}
                value={state.userPhone}
                onChangeText={(value) => handleChangeText('userPhone', value)}
                placeholder={'Telefone'}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={state.userEmail}
                onChangeText={(value) => setUserEmail('userEmail', value)}
                placeholder={'E-mail'}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
            />
            <TextInput
                value={userPassword}
                onChangeText={(value) => handleChangeText('userPassword', value)}
                placeholder={'Senha'}
                secureTextEntry={true}
                style={styles.input}
            />
            <TextInput
                value={userPasswordConfirm}
                onChangeText={(value) => handleChangeText('userPasswordConfirm', value)}
                placeholder={'Senha'}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <Separator marginVertical={30}/>
            <Text style={styles.textSimple}>Atenção!</Text>
            <Text style={styles.textSimple}>Informe um e-mail válido, pois em caso de recuperação de senha, ela será
                enviada para o e-mail cadastrado.</Text>
        </View>
    );
}
