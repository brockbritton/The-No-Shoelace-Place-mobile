import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import * as React from 'react';
import * as Haptics from 'expo-haptics';
import * as ScreenOrientation from 'expo-screen-orientation';
import lacesTop from './assets/TNSLP-Laces-Top.png';
import lacesBottom from './assets/TNSLP-Laces-Bottom.png';

export default function App() {

  const [inputText, setInputText] = React.useState('');

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#999' }} >
      <View style={styles.imageContainer}>
        <Image
          style={[styles.headerImage, { height: 170, bottom: 0, top: 50 }]}
          source={lacesTop}
        />
        <Image
          style={[styles.headerImage, { top: 26 }]}
          source={lacesBottom}
        />
      </View>


      <View style={styles.parsContainer}>
        <Text style={styles.gamePars}>
          Welcome to the Haptics demo! Press the button to feel a haptic
          feedback.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TextInput
          style={{ height: 40 }}
          placeholder="direct patient"
          onChangeText={newText => setInputText(newText)}
          defaultValue={inputText}
        />
        <Button
          title="Success"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parsContainer: {
    width: '80%',
    margin: 'auto',
    top: -1,
    height: '40%',
    backgroundColor: '#000',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 7,
    borderRadius: 10,
    color: '#fff',
    zIndex: 0,
  },
  gamePars: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  headerImage: {
    position: 'relative',
    width: 380,
    height: 300,
    margin: 0,
    padding: 0,
    zIndex: 2,
    objectFit: 'contain',
  },
  imageContainer: {
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
});
