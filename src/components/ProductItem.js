import {Alert} from "react-native";

export default function ProductItem(props) {
    async function handleEditButton() {
        const item = await ProductModel.getItem(props.item.id);
        props.navigation.navigate("Product", item)
    }
    function handleDeletePress(){
        Alert.alert("Atenção", `Tem certeza que deseja excluir " ${props.item.name}"?`)
    }
}