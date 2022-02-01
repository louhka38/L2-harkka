import { Button, View, Text, StyleSheet } from 'react-native';
import { CalcFuncs } from '../components/calcfuncs';

export default function Calc() {

    return (<View style={styles.container}>
        <Text style={styles.txt}>Calc</Text>
        <CalcFuncs></CalcFuncs>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignSelf: "center",
        width: "80%"
    },
    txt: {
        padding: "24px",
        fontSize: 24,
        alignSelf: "center"
    }
})