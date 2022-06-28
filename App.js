/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';
import Header from './src/header'
import Generator from './src/generator'
import axios from "axios"

const Separator = () => (
  <View style={styles.separator} />
);

class App extends Component {
  state = {
    appName: 'Car Controller',
    enginStatus: 'STOP'
  }

  reqEnginStart = async () =>{
    axios
      .post('http://10.0.2.2:4000/car/enginStatusReq',
        {
          carid: '09e7b07a-eeb6-11ec-acf2-acde48001122',
          engin_status: "START_REQ",
          type: "APP"
        }
      )
      .then(({ data }) => {
        this.setState({
          enginStatus: 'START_REQ'
        })
        alert(data.status)
      })
      .catch(e => {
        console.error(e);
        alert("Fail Engin Start Request.")
      })
  }

  reqEnginStop = async () =>{
    axios
      .post('http://10.0.2.2:4000/car/enginStatusReq',
        {
          carid: '09e7b07a-eeb6-11ec-acf2-acde48001122',
          engin_status: "STOP_REQ",
          type: "APP"
        }
      ) 
      .then(({ data }) => {
        this.setState({
          enginStatus: 'STOP_REQ'
        })
        alert(data.status)
      })
      .catch(e => {
        console.error(e);
        alert("Fail Engin Start Request.")
      })
  }

  getEnginStatus = async () =>{
    axios
      .post('http://10.0.2.2:4000/car/enginStatus',
        {
          carid: '09e7b07a-eeb6-11ec-acf2-acde48001122'
        }
      )
      .then(({ data }) => {
        if(data.status == 'STOP' || data.status == "START_REQ"){
          this.setState({ enginStatus: 'STOP' })
          alert("Current Engin Status : STOP")
        }else if(data.status == "START" || data.status == "STOP_REQ "){
          this.setState({ enginStatus: 'START' })
          alert("Current Engin Status : START")
        }
        
      })
      .catch(e => {
        console.error(e);
        alert("Fail Engin Start Request.")
      })
  }

  render(){
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>
        <View style={styles.subView}>
          <Text style={styles.Text}>Hello</Text>
        </View>
        <View style={styles.button}>
          <Button
              title="Engin Start"
              onPress={() => this.reqEnginStart()}
          />
          <Separator />
          <Button
              title="Engin Stop"
              onPress={() => this.reqEnginStop()}
          />
          <Separator />
          <Button
              title="Engin Status2"
              onPress={() => this.getEnginStatus()}
          />
        </View>
        <View style={styles.subView}>
          <Text style={styles.Text}>Car Controller</Text>
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alineItems: 'center',
    padding: 5,
    margin: 5,
    width: '100%'
  }, 
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;