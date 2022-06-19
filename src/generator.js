/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, StyleSheet, Button } from 'react-native';
 
const Generator = (props) => (
    <View style={styles.generator}>
        <Button
            title="Engin Start"
            onPress={() => props.reqEnginStart()}
        />
    </View>
)

const styles = StyleSheet.create({
    generator: {
        alineItems: 'center',
        padding: 5,
        width: '100%'

    }
});

export default Generator;