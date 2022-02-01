import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { componentToHex, hexToRGB, rgbToHex } from '../utils/hex-rgb-conv';

export default function HexConverter() {
    const defaultColor = [255, 0, 255]; // purple
    const dh = rgbToHex(defaultColor[0], defaultColor[1], defaultColor[2]);
    const [rgb, setRgb] = useState(dh);

    const onChangeNumber = (color, txt) => {
        try {
            const tff = parseInt(txt, 10); // hex is in base-10 (0-255)
            const curColor = hexToRGB(rgb); // array in [r,g,b] format
            if (0 <= tff < 256 || isNaN(tff)) {
                if (isNaN(tff)) tff = 0;
                if (color === 'R') curColor[0] = componentToHex(tff); 
                if (color === 'G') curColor[1] = componentToHex(tff); 
                if (color === 'B') curColor[2] = componentToHex(tff);
                const newColor = rgbToHex(curColor[0], curColor[1], curColor[2]);
                setRgb(newColor);
            } else {
                console.error('out of range');
            }
        } catch (e) {
            console.error("bad character in input");
        }
        console.log(rgb);
    }

    return (<>
        <View style={styles.rgb}>
            <View style={styles.rgbInputs}>
                <View style={styles.inputContainer}>
                    <Text style={styles.letter}>R: </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.myInput}
                        onChangeText={(text) => onChangeNumber('R', text)}
                        maxLength={3}
                        defaultValue={defaultColor[0]}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.letter}>G: </Text>
                    <TextInput
                        placeholder=''
                        keyboardType='numeric'
                        style={styles.myInput}
                        onChangeText={(text) => onChangeNumber('G', text)}
                        maxLength={3}
                        defaultValue={defaultColor[1]}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.letter}>B: </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.myInput}
                        onChangeText={(text) => onChangeNumber('B', text)}
                        maxLength={3}
                        defaultValue={defaultColor[2]}
                    ></TextInput>
                </View>
            </View>
            <View>
                <View
                    style={{
                    width: "50px",
                    height: "50px",
                    margin: "16px",
                    alignSelf: 'center',
                    backgroundColor: rgb
                    }}></View>
                <Text>{rgb}</Text>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({
    letter: {
        width: "40px"
    },
    rgb: {
        flexFlow: "row",
        justifyContent: "space-between"
    },
    rgbInputs: {
        width: "150px",
        alignSelf: "center",
        paddingLeft: "8px"
    },
    inputContainer: {
        width: "150px",
        flexFlow: "row"
    },
    myInput: {
        borderWidth: 1,
        width: "130px"
    },
    cBox: {
        width: "50px",
        height: "50px",
        margin: "16px",
        alignSelf: 'center'
    }
});