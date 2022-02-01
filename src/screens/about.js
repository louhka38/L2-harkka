import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { screens } from '.';

import { rgbToHex } from '../utils/hex-rgb-conv';

export default ({ navigation }) => {
    return (<View style={styles.container}>
        <Text style={styles.desc}>
            This application is about counters and converting
            &nbsp;
            <span style={{fontWeight:"bold", color:"red"}}>R</span>
            <span style={{fontWeight:"bold", color:"green"}}>G</span>
            <span style={{fontWeight:"bold", color:"blue"}}>B</span>
            &nbsp;
            to Hex, Some fade animations, platform functions and calculator.
        </Text>
        {screens.map((s) => <View style={styles.btn} key={s.name}>
            <Button
                children={s.name}
                onPress={() => navigation.navigate(s.name)}
                compact="true"
                mode="contained"
                contentStyle={{ height: 44 }}
                labelStyle={{ color: "white", fontSize: 18 }}
            ></Button>
        </View>)}
        {/*<View style={styles.btn}>
            <Button
                title="counter"
                onPress={() => navigation.navigate('Counter')}
            ></Button>
        </View>
        <View style={styles.btn}>
            <Button
                title="counter2"
                onPress={() => navigation.navigate('Counter2')}
            ></Button>
        </View>
        <View style={styles.btn}>
            <Button
                title="hex-converter"
                onPress={() => navigation.navigate('Hex-converter')}
            ></Button>
        </View>
        <View style={styles.btn}>
            <Button
                title="fade"
                onPress={() => navigation.navigate('Fade')}
            ></Button>
        </View>
        <View style={styles.btn}>
            <Button
                title="os"
                onPress={() => navigation.navigate('OS')}
            ></Button>
        </View>*/}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    desc: {
        alignSelf: "center",
        padding: "8px",
        paddingBottom: "16px"
    },
    btn: {
        maxWidth: "50%",
        width: "300px",
        paddingBottom: "8px",
        alignSelf: "center"
    }
})