import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="+" onPress={() => setCount(count + 1)}></Button>
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