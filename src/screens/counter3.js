import { useState, useEffect } from "react"
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter3() {

    let [number, setNumber] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${number} times`;  
    });
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {number}</Text>
            <Button title="+" onPress={() => setNumber(number + 1)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexFlow: "row",
        alignSelf: "center",
        paddingTop: "16px"
    },
    text: {
        alignSelf: "center",
        paddingRight: "8px"
    }
});