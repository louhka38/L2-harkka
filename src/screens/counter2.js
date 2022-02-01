import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (<View style={styles.container}>
            <Text style={styles.text}>Count: {this.state.count}</Text>
            <Button title="+" onPress={() => this.setState({count: this.state.count + 1})}></Button>
        </View>)
    }
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