import {SafeAreaView, StyleSheet, Text} from 'react-native';

function Intro(): JSX.Element {
  console.log('--Intro()');

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello ReactNative</Text>
      <Text style={styles.textBlue}>Intro</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 18,
    color: 'black',
  },
  textBlue: {
    fontSize: 18,
    color: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Intro;
