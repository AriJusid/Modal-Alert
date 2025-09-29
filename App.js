//NO BORRAR npm install --global @expo/ngrok@^4.1.0
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Animated, TouchableOpacity, Modal, Pressable,  TextInput} from 'react-native';
import { useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



export default function App() {

  const scale = useRef(new Animated.Value(1)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    setModalVisible(false);
  };

  const showAlert = () => {
    Alert.alert('This is an Alert');
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
              <View style={styles.bottomSheetModal}>
                <View style={styles.modalIndicator} />
                <Text style={styles.title}>Change Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="New Password"
                  placeholderTextColor="#888"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#888"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <Pressable style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>SAVE</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
    <TouchableOpacity style={[styles.buttonContainer, , { transform: [{ scale }] }]} onPress={() => setModalVisible(true)}>
          <View style={styles.buttonTextWrapper}>
          <Text style={styles.buttonText}>Show Modal</Text>
          </View>
          </TouchableOpacity>
    <View style={styles.new}>
    <Text>New password: {newPassword}</Text>
    </View>
    <TouchableOpacity onPress={showAlert} style={[styles.buttonContainer, , { transform: [{ scale }] }]}>

    <View style={styles.buttonTextWrapper}>
            <Text style={styles.buttonText}>Show alert</Text>
          </View>
    </TouchableOpacity>
    
      <StatusBar style="auto" />
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

  },
  buttonTextWrapper: {
    backgroundColor: 'rgb(5,6,45)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 6,
    width: '60%',
    height: '30%',
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
  new:{
    display:'flex', marginLeft:85, fontSize:20, fontWeight: 'bold',
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
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(44, 44, 44, 0.25)', 
    },
    bottomSheetModal: {
      width: '100%',
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      backgroundColor: '#fff',
      paddingHorizontal: 24,
      paddingTop: 28,
      paddingBottom: 32,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
    },
    modalIndicator: {
      width: 56,
      height: 5,
      borderRadius: 2.5,
      backgroundColor: '#eee',
      marginBottom: 18,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#19204D',
      marginBottom: 20,
      letterSpacing: 0.5,
    },
    input: {
      width: '100%',
      height: 44,
      backgroundColor: '#F6F8FF',
      borderRadius: 24,
      paddingHorizontal: 16,
      fontSize: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#E2E6F7',
      color: '#19204D',
    },
    saveButton: {
      width: '100%',
      height: 44,
      backgroundColor: '#19204D',
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
    },
    saveButtonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: '700',
      letterSpacing: 1,
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      shadowColor: '#9741fc',
      shadowOffset: { width: 0, height: 15 },
      shadowOpacity: 0.2,
      shadowRadius: 30,
      maxWidth: '100%',
      minWidth: 140,
      padding: 3,
      height: '35%',
    },
    buttonTextWrapper: {
      backgroundColor: 'rgb(5,6,45)',
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 6,
      width: '60%',
      height: '30%',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 18,
      textDecorationLine: 'none',
    },
  
});
