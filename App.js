import { StyleSheet, Text, TextInput, View, Button, Image, useWindowDimensions, Keyboard, ScrollView } from 'react-native';
import * as React from 'react';
import * as Haptics from 'expo-haptics';
import lacesTop from './assets/TNSLP-Laces-Top.png';
import lacesBottom from './assets/TNSLP-Laces-Bottom.png';
import lacesFull from './assets/TNSLP-Laces-Full.png';
import fullLogo from './assets/TNSLP-Full-Logo.png';

export default function App() {

  const [inputText, setInputText] = React.useState('');

  const { height, width } = useWindowDimensions();
  const portraitOriented = width < height;


  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log('Keyboard Shown')
        setKeyboardVisible(true); // or some other action
        styles.stretchGamePlay.height = 360;
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Keyboard Hidden')
        setKeyboardVisible(false); // or some other action
        styles.stretchGamePlay.height = 550;
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#000' }} >
      {portraitOriented ?
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.lacesTop}
              source={lacesTop}
            />
            <Image
              style={styles.lacesBottom}
              source={lacesBottom}
            />
          </View>

          <View style={[styles.stretchGamePlay, { height: isKeyboardVisible ? 360 : 550 }]}>
            <ScrollView style={styles.parsContainer}>
              <Text style={styles.gamePars}>
                Welcome to the Haptics demo! Press the button to feel a haptic
                feedback.
              </Text>
              <Text style={styles.gamePars}>
                Testing Testing Testing...
              </Text>
              <Text style={styles.gamePars}>
                Testing Testing Testing...
              </Text>
              <Text style={styles.gamePars}>
                Testing Testing Testing...
              </Text>
              <Text style={styles.gamePars}>
                Testing Testing Testing...
              </Text>
            </ScrollView>

            <View style={styles.inputContainer}>
              <Text style={styles.inputCarrot}>
                &gt;
              </Text>
              <TextInput
                style={styles.patientInput}
                placeholder="direct patient"
                onChangeText={newText => setInputText(newText)}
                defaultValue={inputText}
              />
              <Button
                style={styles.playButton}
                title="play"
                onPress={
                  () =>
                    Haptics.notificationAsync(
                      Haptics.NotificationFeedbackType.Success
                    )
                }
              />
            </View>
          </View>
        </>
        :
        <>
          <View>
            <Image style={styles.landscapeLogo} source={fullLogo} />
          </View>
          <Text style={styles.turnPhoneText}> please use portrait orientation to play </Text>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: -60,
    textAlign: 'center',
    backgroundColor: '#000'
  },
  lacesTop: {
    position: 'absolute',
    width: 380,
    height: 300,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    zIndex: 2,
    objectFit: 'contain',
    top: 5.5,
  },
  lacesBottom: {
    position: 'absolute',
    width: 380,
    height: 300,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    zIndex: 2,
    objectFit: 'contain',
    top: 216,
  },
  stretchGamePlay: {
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: 550, //550, 360
    top: 160,
    backgroundColor: '#000',
    padding: 0,

  },
  parsContainer: {
    position: 'absolute',
    top: 13,
    left: '10%',
    width: '80%',
    height: '80%',
    margin: 'auto',
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 7,
    borderRadius: 10,
    color: '#fff',
    zIndex: 0,
    padding: 20,
  },
  gamePars: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    position: 'absolute',
    left: '15%',
    bottom: '5%',
    margin: 'auto',
    flexDirection: 'row',
    alignContent: 'center',
    width: '60%',
    justifyContent: 'space-between',
  },
  inputCarrot: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 10,
  },
  patientInput: {
    width: '70%',
    height: 45,
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 5,
    padding: 5,
    color: '#fff',
    placeholderTextColor: '#fff',
  },
  playButton: {
    height: 40,
    borderRadius: 5,
    color: '#fff !important',
    backgroundColor: '#000',
    borderColor: '#fff',
  },
  landscapeLogo: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  turnPhoneText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    position: 'absolute',
    top: '85%',
    width: '30%',
    left: '35%',
  },

});
