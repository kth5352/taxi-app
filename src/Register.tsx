/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Register(): JSX.Element {
  console.log('--Register()');

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPw2, setUserPw2] = useState('');

  const isDisable = () => {
    if (userId && userPw && userPw2 && userPw == userPw2) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {justifyContent: 'flex-end'}]}>
        <Icon name="taxi" size={80} color={'#3498db'} />
      </View>
      <View style={[styles.container, {flex: 2}]}>
        <TextInput
          style={styles.input}
          placeholder={'아이디'}
          onChangeText={newId => setUserId(newId)}
        />
        <TextInput
          style={styles.input}
          placeholder={'비밀번호'}
          onChangeText={newPw => setUserPw(newPw)}
        />
        <TextInput
          style={styles.input}
          placeholder={'비밀번호 확인'}
          secureTextEntry={true}
          onChangeText={newPw2 => setUserPw2(newPw2)}
        />
      </View>
      <View style={[styles.container, {justifyContent: 'flex-start'}]}>
        <TouchableOpacity
          disabled={isDisable()}
          style={isDisable() ? styles.buttonDisable : styles.button}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
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
    width: '100%',
  },
  button: {
    width: '70%',
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
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  buttonDisable: {
    width: '70%',
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Register;
