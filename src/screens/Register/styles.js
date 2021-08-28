import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC300',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#730000',
        marginBottom: 20,
        textAlign: 'center',
    },
    saveButton: {
        width: '50%',
        height: 40,
        backgroundColor: '#E37D00',
        padding: 5,
        borderRadius: 5,
    },
    saveButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#730000',
        textAlign: 'center',
    },
    input: {
        width: '90%',
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#730000',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSimple: {
        color: '#730000',
        width: '95%',
        textAlign: 'justify',
    },
});

export default styles;