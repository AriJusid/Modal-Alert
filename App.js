//NO BORRAR npm install --global @expo/ngrok@^4.1.0
import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  Animated,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const scale = useRef(new Animated.Value(1)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const image = {
    uri: 'https://static.vecteezy.com/system/resources/previews/050/864/548/non_2x/light-white-and-grey-gradient-illustration-background-for-flyer-social-media-post-screen-mobile-app-wallpaper-vector.jpg',
  };

  const handleSave = () => {
    if (newPassword === confirmPassword) {
      setModalVisible(false);
    } else {
      Alert.alert('Different password');
    }
  };

  const showAlert = () => {
    Alert.alert('Alert example', 'My message here', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  return (
    <>
      <SafeAreaProvider>
        <ImageBackground source={image} resizeMode="cover" style={styles.img}>
          <SafeAreaView>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
            >
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

            <TouchableOpacity
              style={[styles.buttonContainer, { transform: [{ scale }] }]}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.buttonTextWrapper}>
                <Text style={styles.buttonText}>Show Modal</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.new}>
              <Text style={styles.newText}>New password: {newPassword}</Text>
            </View>

            <TouchableOpacity
              onPress={showAlert}
              style={[styles.buttonContainer, { transform: [{ scale }] }]}
            >
              <View style={styles.buttonTextWrapper}>
                <Text style={styles.buttonText}>Show Alert</Text>
              </View>
            </TouchableOpacity>

            <StatusBar style="auto" />
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',
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
    padding: 6,
    marginVertical: 10,
  },

  buttonTextWrapper: {
    backgroundColor: 'rgb(5,6,45)',
    paddingVertical: 2,
    paddingHorizontal: 24,
    borderRadius: 6,
    width: '60%',
    height: 50,
    justifyContent: 'center',  
    alignItems: 'center',      
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 22,
    textDecorationLine: 'none',
  },

  new: {
    alignItems: 'center',
    marginVertical: 10,
  },

  newText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
});
