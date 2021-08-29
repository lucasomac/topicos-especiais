import {View, Text, FlatList} from "react-native";
import {useEffect, useState} from "react";
import ProductModel from "../models/ProductModel";

export default function ProductList({navigation, route}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        ProductModel.getItems().then(items => setItems(items));
        const unsubscribe = navigation.addListener('focus', () => {
            ProductModel.getItems().then(items => setItems(items))
        });
        return () => {
            unsubscribe;
        };
    }, [route]);
    return (<View style={<style>.container</style>}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
            data={items}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({item}) => <ProductItem item={item} navigation={navigation}/>
            }/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#FFC'
    }, scrollContainer: {flex: 1, width: '90%'}
});