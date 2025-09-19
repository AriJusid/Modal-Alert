//NO BORRAR npm install --global @expo/ngrok@^4.1.0
import React, { useRef } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Animated, TouchableOpacity, Modal, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



export default function App() {

  const scale = useRef(new Animated.Value(1)).current;
  const [modalVisible, setModalVisible] = useState(false);


  const showAlert = () => {
    Alert.alert('Soy un alert')
  }

  return (
    <>
    <SafeAreaProvider>
    <SafeAreaView>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  </Modal>

  <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>

    <TouchableOpacity onPress={showAlert} style={[styles.buttonContainer, , { transform: [{ scale }] }]}>

    <View style={styles.buttonTextWrapper}>
            <Text style={styles.buttonText}>Show alert</Text>
          </View>
    </TouchableOpacity>
    <Animated.View style={styles.container}>
      <StatusBar style="auto" />
    </Animated.View>
    </SafeAreaView>
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    boxShadow: 'equivalent',
    shadowColor: '#9741fc',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    maxWidth: '100%',
    minWidth: 140,
    padding: 3,
    height: '35%',
    borderRadius: '50%',


  },
  buttonTextWrapper: {
    backgroundColor: 'rgb(5,6,45)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 6,
    width: '100%',
    height: '50%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18, 
    whiteSpace: 'nowrap', 
    textDecorationLine: 'none',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
