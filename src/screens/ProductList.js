import {View, Text} from "react-native";

export default function ProductList({navigation}) {
    return (<View style={<style>.container</style>}>
        <Text>Tela de listagem dos produtos</Text>
        <Text>Olá, você está na lsita de produtos!</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#FFC'
    }
});