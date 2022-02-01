import React, { Component } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';

function TinyBtn({props}) {
    return (<View style={styles.btn_1}><Button title={props.symbol} onPress={() => props.calc(props.symbol)}></Button></View>)
}

function EmptyBtn() {
    return (<View style={styles.btn_1}></View>)
}

function WideBtn({props}) {
    return (<View style={styles.btn_2}><Button title={props.symbol} onPress={() => props.calc(props.symbol)}></Button></View>)
}

export class CalcFuncs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            prevNum: "0",
            currentNum: "0",
            lastOperation: "+"
        }
        this.runOperation = this.runOperation.bind(this);
    }

    runOperation(symbol) {
        console.log({symbol})
        const number_symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const clear = 'c';
        const math_symbols = ['+', '-', '*', '/'];
        if (number_symbols.includes(symbol)) {
            if (this.state.currentNum !== '0') {
                this.setState({currentNum: this.state.currentNum + symbol})
            } else {
                this.setState({currentNum: symbol});
            }
        } else if (math_symbols.includes(symbol)) {
            this.setState({prevNum: this.state.currentNum, currentNum: '0', lastOperation: symbol});
        } else if (symbol === '↵') {
            let final = '0'
            if (this.state.lastOperation === '+') {
                final = (parseInt(this.state.currentNum) + parseInt(this.state.prevNum)).toString();
            } else if (this.state.lastOperation === '-') {
                final = (parseInt(this.state.currentNum) - parseInt(this.state.prevNum)).toString();
            } else if (this.state.lastOperation === '*') {
                final = (parseInt(this.state.currentNum) * parseInt(this.state.prevNum)).toString();
            } else if (this.state.lastOperation === '/') {
                final = (parseInt(this.state.currentNum) / parseInt(this.state.prevNum)).toString();
            }
            this.setState({currentNum: final, lastOperation: '+', prevNum: '0'});
        } else if (symbol === 'c') {
            this.setState({currentNum: '0', lastOperation: '+', prevNum: '0'});
        }
    }

    render() {
        return (<View>
            <TextInput value={this.state.currentNum} style={styles.output} editable={false}></TextInput>
            <View style={styles.row}>
                <View>
                    <View style={styles.row}>
                        <TinyBtn props={{symbol: '7', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: '8', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: '9', calc: this.runOperation}}></TinyBtn>
                        <EmptyBtn></EmptyBtn>
                    </View>
                    <View style={styles.row}>
                        <TinyBtn props={{symbol: '4', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: '5', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: '6', calc: this.runOperation}}></TinyBtn>
                    </View>
                    <View style={styles.row}>
                        <TinyBtn props={{symbol: '1', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: '2', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: '3', calc: this.runOperation}}></TinyBtn>
                    </View>
                    <View style={styles.row}>
                        <EmptyBtn></EmptyBtn>
                        <TinyBtn props={{symbol: '0', calc: this.runOperation}}></TinyBtn>
                        <TinyBtn props={{symbol: 'c', calc: this.runOperation}}></TinyBtn>
                    </View>
                    
                </View>
                <View>
                    <View>
                        <View style={styles.row}>
                            <TinyBtn props={{symbol: '+', calc: this.runOperation}}></TinyBtn>
                            <TinyBtn props={{symbol: '-', calc: this.runOperation}}></TinyBtn>
                        </View>
                        <View style={styles.row}>
                            <TinyBtn props={{symbol: '*', calc: this.runOperation}}></TinyBtn>
                            <TinyBtn props={{symbol: '/', calc: this.runOperation}}></TinyBtn>
                        </View>
                        <View style={styles.row}>
                            <WideBtn props={{symbol: '↵', calc: this.runOperation}}></WideBtn>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    btn_1: {
        width: "50px",
        height: "50px",
        padding: "8px"
    },
    btn_2: {
        width: "100px",
        height: "50px",
        padding: "8px"
    },
    row: {
        flexDirection: 'row',
        padding: "8px"
    },
    output: {
        border: "1px solid black"
    }
})