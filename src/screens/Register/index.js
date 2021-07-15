import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';

import Separator from '../../components/Separator';
import styles from "./styles";

export default function Register({navigation: {navigate}}) {
    const [userName, setUserName] = React.useState('');
    const [userPhone, setUserPhone] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    const setUserData = (userData) => {
        return SecureStore.setItemAsync('userData', JSON.stringify(userData));
    };

    function handleRegister() {
        if (!userName || !userPhone || !userEmail || !userPassword) {
            Alert.alert(
                'Erro ao tentar cadastrar usuário:',
                'Preencha todos os campos corretamente!'
            );
        } else {
            //Alert.alert('Credenciais', `E-mail: ${userEmail} \nSenha: ${userPassword}`);
            setUserData({name: userName, phone: userPhone, email: userEmail, password: userPassword});
            navigate('Login', {email: userEmail});
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Dados do Usuário</Text>
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'Nome'}
            />
            <TextInput
                style={styles.input}
                value={userPhone}
                onChangeText={(userPhone) => setUserPhone(userPhone)}
                placeholder={'Telefone'}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={userEmail}
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                placeholder={'E-mail'}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
            />
            <TextInput
                value={userPassword}
                onChangeText={(userPassword) => setUserPassword(userPassword)}
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