import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert, Button} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Separator from '../../components/Separator';
import styles from "./styles";


export default function Login({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [registeredEmail, setRegisteredEmail] = React.useState('');
    const [registeredName, setRegisteredName] = React.useState('');
    const [registeredPassword, setRegisteredPassword] = React.useState('');
    const [haveAccount, setHaveAccount] = React.useState(false);

//{name: userName, phone: userPhone, email: userEmail, password: userPassword}
    async function getUserData() {
        let userData = await SecureStore.getItemAsync('userData');
        if (userData) {
            setRegisteredName(JSON.parse(userData).name);
            setRegisteredEmail(JSON.parse(userData).email);
            setEmail(JSON.parse(userData).email);
            setRegisteredPassword(JSON.parse(userData).password);
            setHaveAccount(true);
        } else {
            setHaveAccount(false);
        }
    }

    async function handleDelete() {
        Alert.alert(
            'Atenção!',
            'Deseja deletar conta do aplicativo?',
            [
                {
                    text: 'Sim',
                    onPress: async () => {
                        await SecureStore.deleteItemAsync('userData');
                        navigation.replace('Login')
                    },
                },
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            {cancelable: false}
        );
    }

    React.useEffect(() => {
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
            if (email === registeredEmail && password === registeredPassword) {
                setPassword('');
                navigation.replace('Home', {name: registeredName});
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

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>App de Apês</Text>
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
                                      onPress={() => Alert.alert('Informação:', `A sua senha foi enviada para o email cadastrado: ${registeredEmail} ${registeredPassword}`)}>
                        <Text style={styles.buttonText}>Esqueci minha senha</Text>
                    </TouchableOpacity></>)}
            <Separator marginVertical={30}/>
            <Text style={styles.textSimpleJustify}>Este aplicativo faz uso de armazenamento local com SecureStore e
                AsyncStorage</Text>
            <Button title='Deletar Conta' style={styles.button} onPress={handleDelete}/>
        </View>
    );
}
