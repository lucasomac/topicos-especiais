import {useState} from "react";
import {Alert, View, Text, TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Separator from "../components/Separator";

export default function Product({navigation}) {
    const [state, setState] = useState({
        productName: '', productPrice: '', productQty: ''
    });
    const handleChangeText = (key, value) => {
        setState({...this.state, [key]: value})
    }

    async function handleSave() {
        if (!state.productName || !state.productPrice || !state.productQty) {
            Alert.alert('Erro ao tentar cadastrar produto:', 'Preencha todos os campos corretamente!')
        } else {
            const listItem = {
                id: new Date().getTime(),
                name: state.productName,
                price: parseFloat(state.productPrice),
                qty: parseInt(state.productQty)
            };
            let savedProducts = [];
            const response = await AsyncStorage.getItem('products');
            if (response) savedProducts = JSON.parse(response);
            savedProducts.push(listItem);
            console.log(savedProducts); //comentar na 2
            Alert.alert('Dados dos produtos:', 'Produto salvo com sucesso!');
            await AsyncStorage.setItem('products', JSON.stringify(savedProducts));
            setState({});
            Alert.alert('Dados dos produtos:', 'Produto salvo com sucesso!');
            navigation.navigate("ProductList");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Dados do Produto</Text>
            <TextInput style={styles.input} value={state.productName}
                       onChangeText={(value) => handleChangeText('productName', value)} placeholder={'Nome'}
                       clearButtonMode={"always"}/>
            <TextInput style={styles.input} value={state.productPrice}
                       onChangeText={(value) => handleChangeText('productPrice', value)} placeholder={'Preço'}
                       keyboardType="numeric"
                       clearButtonMode={"always"}/>
            <TextInput style={styles.input} value={state.productPrice}
                       onChangeText={(value) => handleChangeText('productPrice', value)}
                       placeholder={'Quantidade em estoque'}
                       keyboardType="numeric"
                       clearButtonMode={"always"}/>
            <Separator marginVertical={30}/>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FC0'
        }, titleText: {
            fontWeight: 'bold', fontSize: 30, color: '#730', marginBottom: 20, textAlign: "center"
        }, saveButton: {
            width: '50%', height: 40, backgroundColor: '#E37', padding: 5, borderRadius: 5
        }, saveButtonText: {
            fontSize: 20, fontWeight: "bold", color: '#730', textAlign: "center"
        }, input: {
            width: '50%', height: 45, padding: 10, borderWidth: 1, borderColor: '#730', borderRadius: 5, marginBottom: 10
        }, textSimple: {
            color: '#730', width: '95%', textAlign: "justify"
        }
    })
;