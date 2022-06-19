/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 
const Header = (props) => (
    <View style={styles.header}>
        <Text style={styles.mainText}>{props.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
      width:'100%'
    },
    mainText: {
        fontSize: 50,
        fontWeight: 'normal',
        color: 'red',
        padding: 20
      }
});

export default Header;