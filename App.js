import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [ lastDig, setLastDig ] = useState("0");
  const [backGroundColor, setBackGroundColor] = useState("white");

  function changeBackground(string){

    const colors= [
      "white",
      "green",
      "blue",
      "red",
      "aqua",
      "greenyellow",
      "darkmagenta",
      "blueviolet",
      "deeppink",
      "orange"
    ]

    const color = colors[parseInt(string)]
    setBackGroundColor(color)

  }
  
  function handleTime(){  
    const time = Date.now().toString();
    const lastDig = time[time.length - 1];
    setLastDig(lastDig);
    changeBackground(lastDig);
  }

  return (
    <View style={{
      flex: 1, 
      backgroundColor: backGroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={styles.h1}>Go 4all</Text>
      <TouchableOpacity 
        style={styles.btn}
        onPress={handleTime}
      >
        <Text style={styles.btnText}>Clique</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  btn: {
    backgroundColor: '#44b1c1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 13,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 24,
  }
});
